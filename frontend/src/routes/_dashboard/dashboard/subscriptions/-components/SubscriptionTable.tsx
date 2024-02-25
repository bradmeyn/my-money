import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Badge,
} from "@tremor/react";

import { type Subscription } from "../../../../../data";
import { formatAsCurrency } from "../../../../../utils";

export default function SubscriptionTable({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  return (
    <Card>
      <h2 className="text-md text-slate-500 font-semibold">Subscriptions</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Subscription</TableHeaderCell>
            <TableHeaderCell>Cost</TableHeaderCell>
            <TableHeaderCell>Frequency</TableHeaderCell>
            <TableHeaderCell>Payment Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Started</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((subscription) => (
            <SubscriptionItem
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

type SubscriptionItemProps = {
  subscription: Subscription;
};

function SubscriptionItem({ subscription }: SubscriptionItemProps) {
  const status = subscription.active ? "Active" : "Inactive";
  const statusColor = subscription.active ? "" : "text-slate-700 bg-slate-200";

  return (
    <TableRow key={subscription.id}>
      <TableCell>{subscription.name}</TableCell>
      <TableCell>{formatAsCurrency(subscription.cost)}</TableCell>
      <TableCell>{subscription.paymentFrequency}</TableCell>
      <TableCell>{subscription.paymentDate}</TableCell>
      <TableCell>
        <Badge className={statusColor}>{status}</Badge>
      </TableCell>
      <TableCell>{subscription.startDate}</TableCell>
    </TableRow>
  );
}
