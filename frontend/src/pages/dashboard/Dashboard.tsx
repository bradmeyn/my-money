import { Card } from "@tremor/react";
import Navigation from "../../components/Navigation";

export default function Dashboard() {
  return (
    <div className="flex flex-1 bg-slate-900 p-6">
      <Navigation />
      <main className="flex-1 p-20  bg-tremor-brand-faint rounded-lg ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <Card>
            <h2 className="text-xl font-bold">Total Sales</h2>
            <p>$ 10,000</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Total Orders</h2>
            <p>100</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Total Products</h2>
            <p>50</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Total Users</h2>
            <p>1000</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
