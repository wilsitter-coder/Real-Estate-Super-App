import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{fontSize:28,fontWeight:800,marginBottom:8}}>
        Real-Estate Super-App (Minimal)
      </h1>
      <p style={{opacity:.85,maxWidth:720}}>
        This starter includes a Map (Area Explorer) and a server Analyzer API
        (PITI, cashflow, cap rate, CoC, DSCR). You can deploy now, then add auth,
        database, CRM, and payments later.
      </p>

      <div style={{display:"flex",gap:12,marginTop:16}}>
        <Link href="/explore" style={{padding:"8px 12px",border:"1px solid #ccc",borderRadius:10}}>
          Open Area Explorer
        </Link>
      </div>

      <section style={{marginTop:28}}>
        <h3>Try the Analyzer API (example)</h3>
        <pre style={{background:"#f7f7f7",padding:12,borderRadius:10,overflow:"auto"}}>
{`POST /api/analyzer/calc
Body:
{
  "price":800000, "dpct":20, "rate":5, "termYears":30,
  "taxes":3000, "insurance":1200, "hoa":0, "maintenancePct":1,
  "expectedRent":3200, "vacancyPct":5
}`}
        </pre>
      </section>
    </main>
  );
}
