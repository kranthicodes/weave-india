import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';
const razorpay = new Razorpay({
  key_id: process.env.key_id!,
  key_secret: process.env.key_secret,
});

export async function POST(request: NextRequest) {
  const { amount, currency, name } = (await request.json()) as {
    amount: string;
    currency: string;
    name: string;
  };

  const options = {
    amount: amount,
    currency: currency,
    receipt: uuid(),
    notes: {
      customerName: name,
    },
  };

  const order = await razorpay.orders.create(options);
  console.log(order);
  return NextResponse.json({ orderId: order.id }, { status: 200 });
}
