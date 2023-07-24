import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LOL.GG",
	description: "Created by Ben Hur",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className=" bg-nav">
				<Sidebar />
				<Navbar />
				<Searchbar />
				{children}
			</body>
		</html>
	);
}
