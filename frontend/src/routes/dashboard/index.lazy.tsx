import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "./-components/Navbar";

export const Route = createLazyFileRoute("/dashboard/")({
  component: () => <DashboardPage />,
});

export default function DashboardPage() {
  return (
    <div className="flex flex-1">
      <Navbar />
      <main className="flex-1 p-20  bg-tremor-background-muted rounded-lg ">
        <h1 className="text-slate-800 text-4xl">Dashboard</h1>
      </main>
    </div>
  );
}
