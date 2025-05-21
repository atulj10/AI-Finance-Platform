import { inngest } from "@/app/lib/inngest/client";
import {
  checkBudgetAlerts,
  processRecurringTransactions,
  triggerRecurringTransactions,
} from "@/app/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlerts,
    triggerRecurringTransactions,
    processRecurringTransactions,
  ],
});
