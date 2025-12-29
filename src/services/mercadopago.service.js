import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});

export async function createPreference(items) {
  const preference = new Preference(client);

  const response = await preference.create({
    body: {
      items: items.map(item => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: Number(item.price)
      })),
      back_urls: {
        success: "https://example.com/success",
        failure: "https://example.com/failure",
        pending: "https://example.com/pending"
      }
      // 🔴 auto_return ELIMINADO
    }
  });

  return response.id;
}
