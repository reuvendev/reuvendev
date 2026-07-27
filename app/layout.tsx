// app/layout.tsx
import Navbar from '../components/Navbar'; // Import the file you just created
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24"> {/* pt-24 adds space so the content isn't hidden behind the navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Reuven Jimenez — Portfolio",
  description: "BSIT student based in Baguio City, Philippines.",
  icons: {
    icon: "https://cdn.reuvendev.site/file/reuvendev/Images/Icon/ic.png",
  },
};