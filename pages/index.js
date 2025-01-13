import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Face Attendance System</title>
      </Head>
      <header className={`${styles.header}`}>
        <h1 className={`${styles.title}`}>Face Attendance System</h1>
        {/* <Navbar /> */}
      </header>
      <main className={`${styles.main}`}>
        <Image
          src="/attendance-banner.jpg" 
          alt="Face Attendance System"
          width={600}
          height={400}
          className={`${styles.bannerImage}`}
        />
        <div className={`${styles.description}`}>
          <h2>Why Choose Us?</h2>
          <p>
            Our Face Attendance System provides an accurate and efficient way of tracking attendance, 
            eliminating manual errors and enhancing productivity. 
          </p>
          <p>
            With features like real-time detection, automated reports, and a user-friendly interface, 
            this system is perfect for schools, colleges, and offices.
          </p>
        </div>
      </main>
      {/* <Footer /> */}
      <Link href="/niruta">See Contact Info</Link>
    </div>
  );
}
