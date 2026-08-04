/**
 * GBD World - rascunhos automáticos de notícias usando xAI/Grok.
 * Não publica diretamente. O retorno deve ser revisado e salvo pelo painel editorial.
 *
 * ENV:
 * XAI_API_KEY
 * XAI_MODEL (opcional; padrão grok-4.5)
 */
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  if (!process.env.XAI_API_KEY) return res.status(503).json({ error: "XAI_API_KEY não configurada" });

  const body = req.body || {};
  const categories = Array.isArray(body.categories) && body.categories.length
    ? body.categories
    : ["games", "inteligência artificial", "tecnologia", "game development"];

  const prompt = `
Você é o editor de notícias do GBD World.
Pesquise notícias recentes apenas sobre: ${categories.join(", ")}.
Crie no máximo 5 RASCUNHOS em português do Brasil.
Não invente fatos, datas, links ou declarações.
Cada item deve conter: título, resumo, categoria, fonte, url, data publicada e texto curto para o ByteLog.
Não finja ser um personagem.
Não publique automaticamente.
Retorne JSON válido no formato:
{"items":[{"title":"","summary":"","category":"","source":"","url":"","publishedAt":"","byteLogText":""}]}
`;

  try {
    const response = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.XAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.XAI_MODEL || "grok-4.5",
        input: prompt,
        tools: [{ type: "web_search" }]
      })
    });
    const payload = await response.json();
    if (!response.ok) return res.status(response.status).json(payload);
    return res.status(200).json({
      mode: "draft_only",
      provider: "xAI",
      raw: payload
    });
  } catch (error) {
    return res.status(500).json({ error: "Falha ao gerar rascunhos", detail: String(error) });
  }
};