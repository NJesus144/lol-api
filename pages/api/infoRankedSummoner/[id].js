import axios from "axios";

export default async function infoRankedSummoner(req, res) {
  const { id } = req.query;

  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.NEXT_PUBLIC_LOL_API}`
    );
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
