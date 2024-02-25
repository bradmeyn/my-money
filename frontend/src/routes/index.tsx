import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@tremor/react";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <>
      <header className="flex justify-between container py-4">
        <span className="text-slate-900 font-bold">MyMoney</span>
        <Link
          to="/dashboard/budget"
          className="rounded-full bg-tremor-brand text-white py-2 px-4 font-semibold"
        >
          Dashboard
        </Link>
      </header>

      <main className="flex-1 container">
        <section className="py-12">
          <div className="mb-20">
            <h1 className="text-slate-800 text-7xl font-semibold mb-4 max-w-[400px]">
              <div>Your</div> <div>finance</div> <div>dashboard</div>
            </h1>
            <p className="text-slate-900 text-xl max-w-[600px] mb-8">
              MyMoney is a personal finance dashboard that helps you track your
              subscriptions, create a budget, and save money.
            </p>

            <Link
              to="/dashboard/budget"
              className="rounded-full bg-tremor-brand text-white py-2 px-4 font-semibold text-lg"
            >
              Get started
            </Link>
          </div>

          <Card>
            <h2 className="text-xl  text-slate-800">Dashboard Picture</h2>
          </Card>
        </section>
      </main>

      <footer className="container">
        <p>© 2021 Brand</p>
      </footer>
    </>
  );
}
