"use client";
export default function Button({ label, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
    >
      {label}
    </button>
  );
}
