module.exports = async function handler(req, res) {
  return res.status(200).json({
    series: "PodByte",
    season: 1,
    episodes: [{
      number: 1,
      title: "Episódio 1",
      status: "concluído - mídia ainda não anexada",
      mediaUrl: null
    }]
  });
};