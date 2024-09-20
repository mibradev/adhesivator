import "./globals.css";

export const metadata = {
  title: "Adhesivator",
  description: "Calculate the cost of adhesive tapes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
