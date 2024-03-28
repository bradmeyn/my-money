import { Link } from "@tanstack/react-router";
import { RiPieChartLine } from "@remixicon/react";

export default function Navbar() {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <nav className="flex p-4 fixed sm:static sm:h-full rounded sm:flex sm:flex-col bottom-1 w-full  bg-slate-700">
      <div className="mb-10 text-xl font-semibold  text-white">App</div>
      <ul className="flex sm:flex-col gap-1 w-full">
        {links.map((link) => (
          <NavbarLink key={link.href} name={link.name} href={link.href} />
        ))}
      </ul>
    </nav>
  );
}

type NavbarLinkProps = {
  name: string;
  href: string;
};

export function NavbarLink({ name, href }: NavbarLinkProps) {
  return (
    <li>
      <Link
        to={href}
        activeOptions={{ exact: true }}
        activeProps={{
          className:
            "bg-tremor-brand text-slate-100  text-white hover:text-white ",
        }}
        inactiveProps={{ className: "text-slate-100 hover:text-yellow" }}
        className="mb-3 text-sm p-2 rounded font-semibold flex gap-4 transition-all duration-200 ease-in-out"
      >
        <RiPieChartLine className="inline-block" size={20} />
        <span>{name}</span>
      </Link>
    </li>
  );
}
