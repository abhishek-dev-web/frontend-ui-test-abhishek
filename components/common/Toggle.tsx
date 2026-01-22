"use client";
export default function Toggle({ value, onChange }: any) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-10 h-5 rounded-full ${value ? "bg-teal-500" : "bg-gray-300"}`}
    >
      <div
        className={`h-4 w-4 bg-white rounded-full transition ${
          value ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
