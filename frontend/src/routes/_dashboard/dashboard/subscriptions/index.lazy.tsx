import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_dashboard/dashboard/subscriptions/"
)({
  component: () => <SubscriptionPage />,
});

export default function SubscriptionPage() {
  return <div></div>;
}
