export default function Navigation() {
  return (
    <aside className="bg-slate-900 flex-1 max-w-[300px]">
      <div className="p-10">
        <h1 className="text-2xl font-bold text-tremor-content dark:text-dark-tremor-content">
          SuperBudget
        </h1>
      </div>
      <nav className="flex flex-col p-10 gap-5">
        <a
          href="/"
          className="text-tremor-content dark:text-dark-tremor-content"
        >
          Dashboard
        </a>
        <a
          href="/"
          className="text-tremor-content dark:text-dark-tremor-content"
        >
          Products
        </a>
        <a
          href="/"
          className="text-tremor-content dark:text-dark-tremor-content"
        >
          Orders
        </a>
      </nav>
    </aside>
  );
}
