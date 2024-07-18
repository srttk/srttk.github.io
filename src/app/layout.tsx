import "./global.css";
export const metadata = {
  title: "Sarath TK",
  description: "Sarath TK - Fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
