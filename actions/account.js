"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
  const serialize = { ...obj };

  if (obj.balance) {
    serialize.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialize.amount = obj.amount.toNumber();
  }
  return serialize;
};

export async function updateDefaultAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found!");

    await db.account.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });

    const account = await db.account.update({
      where: { userId: user.id, id: accountId },
      data: { isDefault: true },
    });

    revalidatePath("/dashboard");

    return { success: true, account: serializeTransaction(account) };
  } catch (error) {
    throw new Error(error?.message);
  }
}
