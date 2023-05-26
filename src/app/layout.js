import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300","400","500","600","700","800","900"],
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={poppins.className}>{children}</main>
      </body>
    </html>
  );
}
