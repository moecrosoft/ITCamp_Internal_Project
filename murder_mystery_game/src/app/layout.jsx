import "./globals.css";

export const metadata = {
  title: "Crimson Midnight",
  description: "A murder mystery investigation game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
