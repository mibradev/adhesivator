import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Adhesivator",
  description: "Calculate the cost of adhesive tapes",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className="bg-slate-800 text-slate-200">
        <h1 className="bg-slate-900 p-8 text-center text-xl font-bold text-slate-400">
          <Link href="/">Adhesivator</Link>
        </h1>
        <main className="mx-auto my-8 w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-2/12">
          {children}
        </main>
      </body>
    </html>
  );
}
