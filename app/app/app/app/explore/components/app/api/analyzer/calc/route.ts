import { NextRequest, NextResponse } from "next/server";

function analyze({
  price, dpct, rate, termYears,
  taxes, insurance, hoa, maintenancePct,
  expectedRent, vacancyPct
}:{
  price:number; dpct:number; rate:number; termYears:number;
  taxes:number; insurance:number; hoa:number; maintenancePct:number;
  expectedRent:number; vacancyPct:number;
}) {
  const down = price * (dpct/100);
  const loan = price - down;
  const r = (rate/100)/12;
  const n = termYears * 12;
  const pmt = r === 0 ? loan/n : (loan * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
  const maint = (price * (maintenancePct/100))/12;
  const piti = pmt + (taxes/12) + (insurance/12) + (hoa/12) + maint;

  const grossRent = expectedRent * (1 - (vacancyPct/100));
  const cashflow = grossRent - piti;
  const capRate = (grossRent*12)/price*100;
  const coc = (cashflow*12)/down*100;
  const dscr = piti === 0 ? 0 : grossRent/piti;

  return { piti, cashflow, capRate, coc, dscr, roi5y: coc*5, roi10y: coc*10 };
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const result = analyze(body);
    return NextResponse.json({ ok: true, result });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
  }
}
