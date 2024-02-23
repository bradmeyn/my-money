export default function Navbar() {
  return (
    <nav className="flex flex-col p-5 bg-tremor-background-emphasis max-w-[300px]">
      <ul>
        <li>
          <a href="/dashboard/_dashboard/subscriptions">Subscriptions</a>
        </li>
        <li>
          <a href="/dashboard/_dashboard/budget">Budget</a>
        </li>
      </ul>
    </nav>
  );
}
