import Card from "../common/Card";

export default function StatsCards() {
  const stats = ["Today's Money", "Today's Users", "New Clients", "Sales"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map(stat => (
        <Card key={stat}>
          <p className="text-sm text-gray-500">{stat}</p>
          <h2 className="text-xl font-bold">$53,000</h2>
        </Card>
      ))}
    </div>
  );
}
