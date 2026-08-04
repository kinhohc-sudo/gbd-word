/**
 * TODO CODEX:
 * 1. Validar sessão do administrador.
 * 2. Validar schema do rascunho.
 * 3. Salvar em Supabase na tabela editorial_news_drafts.
 * 4. Exigir aprovação humana antes de copiar para posts.
 * 5. Nunca expor XAI_API_KEY ao navegador.
 */
module.exports = async function handler(req, res) {
  return res.status(501).json({
    implemented: false,
    reason: "Supabase e autenticação administrativa ainda não conectados.",
    next: "Seguir docs/CODEX_READ_FIRST.md"
  });
};