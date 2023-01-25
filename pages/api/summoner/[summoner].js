import axios from "axios";

export default async function InfoSummoner(req, res) {
  const { summoner } = req.query;

  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.NEXT_PUBLIC_LOL_API}`
    );
    res.status(200).send(response.data);
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return res.status(400).send();

    res.status(500).send();
  }
}
