module.exports = async function handler(req, res) {
  return res.status(200).json({ ok: true, project: "GBD World", stage: "frontend handoff" });
};