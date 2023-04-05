import Navbar from "./componenets/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Clone of Airbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
