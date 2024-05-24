import Image from "next/image";
import MailPage from "./../components/templates/mail/index.tsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-[24]">
      <MailPage />
    </main>
  );
}
