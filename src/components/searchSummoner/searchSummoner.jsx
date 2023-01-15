import styled from "styled-components";
import axios from "axios";

import Input from "../form/input/Input";
import Button from "../button/Button";
import CardSummoner from "../cardSummoner/CardSummoner";

import { useState } from "react";

const Container = styled.div`
  padding: 20px;
`;

export default function SearchSummoner() {
  const [textSummoner, setTextSummoner] = useState();
  const [playerData, setPLayerData] = useState({});
  const [rankedPlayer, setRankedPlayer] = useState({});

  const searchForPlayer = async () => {
    const response = await axios.get(`/api/summoner/${textSummoner}`);
    setPLayerData(response.data);
    infoRankedSummoner(response.data.id);
  };

  const infoRankedSummoner = async (id) => {
    const response = await axios.get(`/api/infoRankedSummoner/${id}`);

    const { tier, rank, wins, losses, queueType } = response.data[1]
      ? response.data[1]
      : response.data[0];

    setRankedPlayer({
      rank,
      wins,
      losses,
      queueType,
      tier,
      winRate: ((wins / (wins + losses)) * 100).toFixed(1),
    });
  };

  return (
    <>
      <Container>
        <Input
          placeholder="Digite o nome do invocador"
          onChange={(e) => setTextSummoner(e.target.value)}
        />
        <Button onClick={searchForPlayer}>Buscar</Button>
      </Container>
      {JSON.stringify(playerData) != "{}" && (
        <CardSummoner
          profileIcon={playerData.profileIconId}
          name={playerData.name}
          summonerLevel={playerData.summonerLevel}
          tier={rankedPlayer.tier}
          rank={rankedPlayer.rank}
          wins={rankedPlayer.wins}
          losses={rankedPlayer.losses}
          winRate={rankedPlayer.winRate}
        />
      )}
    </>
  );
}
