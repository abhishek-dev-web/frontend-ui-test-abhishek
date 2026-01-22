"use client";
export default function Tabs({ tabs, active, setActive }: any) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab: string) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded ${
            active === tab ? "bg-teal-500 text-white" : "bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
