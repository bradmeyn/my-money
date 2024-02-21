import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <div className="p-2">
      <h3 className="text-black">Welcome Home!</h3>
    </div>
  );
}
