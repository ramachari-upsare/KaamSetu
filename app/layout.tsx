import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"KaamSetu — Your business, remembered",description:"Job memory and action engine for local service businesses."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}