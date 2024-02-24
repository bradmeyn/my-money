import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/dashboard/")({
  component: DashboardPage,
});

export default function DashboardPage() {
  return <div></div>;
}
