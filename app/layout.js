import "./globals.css";
export const metadata = { title:"EDU Apps Plus", description:"Learning, creating, evidence and assessment." };
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}
