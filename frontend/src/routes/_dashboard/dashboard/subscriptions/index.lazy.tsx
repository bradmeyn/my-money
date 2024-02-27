import { createLazyFileRoute } from "@tanstack/react-router";
import { SUBSCRIPTIONS } from "./../../../../data";
import { Card } from "@tremor/react";
import SubscriptionTable from "./-components/SubscriptionTable";

import SubscriptionCategoryChart from "./-components/SubscriptionCategoryChart";
import { formatAsCurrency } from "../../../../utils";

export const Route = createLazyFileRoute(
  "/_dashboard/dashboard/subscriptions/"
)({
  component: () => <SubscriptionPage />,
});

const activeSubscriptions = SUBSCRIPTIONS.filter((s) => s.active).map((s) => ({
  name: s.name,
  value: s.cost,
}));

const monthlyTotal = activeSubscriptions.reduce((acc, s) => acc + s.value, 0);

export default function SubscriptionPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <Card>
          <h2>Active Subscriptions</h2>
          <p className="text-3xl font-semibold">{activeSubscriptions.length}</p>
        </Card>

        <Card>
          <h2>Monthly Spend</h2>
          <p className="text-3xl font-semibold">
            {formatAsCurrency(monthlyTotal)}
          </p>
        </Card>
      </div>
      <div className="grid grid-cols-12 mt-10 gap-10">
        <div className="col-span-1 sm:col-span-8">
          <SubscriptionTable subscriptions={SUBSCRIPTIONS} />
        </div>

        <div className="col-span-12 sm:col-span-4">
          <SubscriptionCategoryChart subscriptions={activeSubscriptions} />
        </div>
      </div>
    </>
  );
}
