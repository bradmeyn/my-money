import { Outlet, createFileRoute } from "@tanstack/react-router";
import Header from "./_dashboard/-components/Header";
import Navbar from "./_dashboard/-components/Navbar";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});

export default function DashboardLayout() {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-1 border p-4">
        <aside>
          <Navbar />
        </aside>

        <div className="w-full p-10">
          <Header />
          <main className="flex-1 bg-tremor-background-muted rounded-lg">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
