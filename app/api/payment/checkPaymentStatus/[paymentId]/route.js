import { NextRequest, NextResponse } from "next/server";
import { checkPaymentStatus } from "../../../../server/db/payment/checkPaymentStatus";

export async function GET(req, { params }) {
  try {
    const { paymentId } = params;
    console.log("CHECK PAYMENT STATUS", paymentId);
    const payment = await checkPaymentStatus(paymentId);

    return NextResponse.json(payment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
