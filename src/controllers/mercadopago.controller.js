import { createPreference } from "../services/mercadopago.service.js";

export async function createPreferenceController(req, res) {
  try {
    const { items } = req.body;

    const preferenceId = await createPreference(items);
    return res.json({ preferenceId });

  } catch (error) {
    console.error("🔥 ERROR MERCADO PAGO:", error);
    return res.status(500).json({
      message: "Error creando preferencia",
      error: error
    });
  }
}
