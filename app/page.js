import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <a
        className="block p-8 rounded bg-slate-700 text-slate-300 text-center text-lg"
        href="by-length"
      >
        الحساب بطول البكرة
      </a>
      <a
        className="block p-8 rounded bg-slate-700 text-slate-300 text-center text-lg"
        href="by-weight"
      >
        الحساب بوزن العمود
      </a>
    </div>
  );
}
