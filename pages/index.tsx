import Layout from "@/components/layouts/Layout";
import { Geist, Geist_Mono } from "next/font/google";

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
  <>
  <Layout>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat obcaecati dignissimos autem tenetur aliquid sapiente fugiat ex esse doloremque minus neque nulla quia, omnis perferendis dolorem. Sit, ex. Odit?
  </Layout>
  </>
  );
}
