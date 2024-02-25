import { useRouterState } from "@tanstack/react-router";

export default function Header() {
  const { location } = useRouterState();

  const page = location.pathname.split("/").pop() || "_dashboard";
  const name =
    page === "_dashboard"
      ? "Dashboard"
      : page?.charAt(0)?.toUpperCase() + page?.slice(1);

  return (
    <header className="w-full">
      <h1 className="text-slate-800 text-2xl mb-2">{name}</h1>
    </header>
  );
}
