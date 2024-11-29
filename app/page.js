import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <a
        className="block rounded-sm bg-slate-700 p-8 text-center text-lg text-slate-300"
        href="by-length"
      >
        الحساب بطول البكرة
      </a>
      <a
        className="block rounded-sm bg-slate-700 p-8 text-center text-lg text-slate-300"
        href="by-weight"
      >
        الحساب بوزن العمود
      </a>
    </div>
  );
}
