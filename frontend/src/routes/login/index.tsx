import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

export default function LoginPage() {
  return (
    <>
      <header className="flex justify-between container py-4">
        <span className="text-slate-900 font-bold">App</span>
        <Link
          to="/register"
          className="rounded-full bg-tremor-brand text-white py-2 px-4 font-semibold text-sm"
        >
          Register
        </Link>
      </header>

      <main className="flex-1 container">
        <section className="py-12">
          <div className="mb-20">
            <h1 className="text-slate-800 text-5xl font-semibold mb-4 ">
              Docker + React + Node.js
            </h1>
            <p className="text-slate-900 text-xl max-w-[600px] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </p>

            <Link
              to="/dashboard"
              className="rounded-full bg-tremor-brand text-white py-2 px-4 font-semibold text-sm"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
