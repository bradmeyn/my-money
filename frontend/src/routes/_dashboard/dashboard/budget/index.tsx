import { Card } from "@tremor/react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/dashboard/budget/")({
  component: BudgetPage,
});

export default function BudgetPage() {
  return <div>content</div>;
}
