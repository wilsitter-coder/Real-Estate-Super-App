export const dynamic = "force-static";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>
        <div style={{maxWidth:960,margin:"0 auto",padding:"20px"}}>
          <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <Link href="/" style={{fontWeight:700,fontSize:18}}>RE Super-App</Link>
            <nav style={{display:"flex",gap:16,fontSize:14}}>
              <Link href="/explore">Explore</Link>
              <a href="https://vercel.com" target="_blank">Deploy</a>
            </nav>
          </header>
          {children}
          <footer style={{marginTop:32,fontSize:12,opacity:.7}}>
            © {new Date().getFullYear()} Real-Estate Super-App (minimal starter)
          </footer>
        </div>
      </body>
    </html>
  );
}
