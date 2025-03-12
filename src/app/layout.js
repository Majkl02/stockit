import "./globals.css";

export const metadata = {
  title: "StockIt",
  description: "University Final Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
