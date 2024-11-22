import { createPayment } from "@/app/db/payment/createPayment";
import { PaymentMethod, PaymentStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      token,
      transaction_amount,
      installments,
      payment_method_id,
      issuer_id,
      payer,
      userId,
      products,
      orderData,
      couponCode,
    } = await req.json();

    if (
      !transaction_amount ||
      !token ||
      !payment_method_id ||
      !payer ||
      !userId ||
      !products ||
      !products.length ||
      !orderData
    ) {
      console.error("Campos obrigatórios ausentes");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Iniciando chamada para a API do Mercado Pago...");

    const response = await fetch("https://api.mercadopago.com/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        "X-Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        token,
        transaction_amount,
        installments,
        payment_method_id,
        issuer_id,
        payer,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Erro na resposta do Mercado Pago:", result);
      throw new Error(result.message || "Erro ao criar pagamento");
    }

    const { id, status } = result;

    if (status === "approved") {
      const dbPayment = await createPayment({
        userId,
        amount: transaction_amount,
        paymentMethod: PaymentMethod.CREDITO,
        gatewayId: id.toString(),
        status: PaymentStatus.APPROVED,
        couponCode: couponCode || undefined,
      });

      for (const product of products) {
        console.log("Processando produto:", product);

        await prisma.paymentProduct.create({
          data: {
            paymentId: dbPayment.id,
            productId: product.productId,
            quantity: product.quantity,
            approved: true,
          },
        });

        await prisma.product.update({
          where: { id: product.productId },
          data: {
            quantity: {
              decrement: product.quantity,
            },
          },
        });
      }

      await prisma.paymentDeliveryAddress.create({
        data: {
          paymentId: dbPayment.id,
          address: orderData.to.address,
          city: orderData.to.city,
          state: orderData.to.state_abbr,
          country: "Brasil",
          zip: orderData.to.postal_code,
          phone: orderData.to.phone,
          name: orderData.to.name,
          serviceId: orderData.service.toString(),
          complement: orderData.to.complement,
          number: orderData.to.number,
          cpf: orderData.to.document,
        },
      });

      const shippingResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/createShipping`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderData }),
        }
      );

      const shippingResult = await shippingResponse.json();

      console.log("Resultado da criação do frete:", shippingResult);

      if (!shippingResponse.ok) {
        console.error("Erro ao criar frete:", shippingResult);
        // throw new Error(shippingResult.error || "Erro ao criar frete");
      }

      console.log("Frete criado com sucesso.");

      return NextResponse.json({ ...result, shipping: shippingResult });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
