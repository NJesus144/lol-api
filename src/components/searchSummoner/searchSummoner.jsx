import styled from "styled-components";
import axios from "axios";

import Input from "../form/input/Input";
import Button from "../button/Button";
import CardSummoner from "../cardSummoner/CardSummoner";
import Logo from "../logo/Logo";

import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  background-color: red;
`;

const H1 = styled.h1`
color: yellow;
`;


const Containerimg = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SearchSummoner() {
  const [summonerName, setSummonerName] = useState();
  const [playerData, setPLayerData] = useState({});
  const [rankedPlayer, setRankedPlayer] = useState({});
  const [searchSummoner, setSearchSummoner] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchForPlayer = async () => {
    setRankedPlayer({});
    setPLayerData({});
    try {
      const response = await axios.get(`/api/summoner/${summonerName}`);
      setPLayerData(response.data);
      infoRankedSummoner(response.data.id);
      setSearchSummoner(false);
      setError(false);
    } catch (err) {
      if (err.code === "ERR_BAD_REQUEST") {
        setError(true);
        setSearchSummoner(false);
      }
    }
  };

  const infoRankedSummoner = async (id) => {
    try{
      const response = await axios.get(`/api/infoRankedSummoner/${id}`);
      console.log(response.data)
      setSearchSummoner(false);

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

    }catch(err){
      if(err.message === "Cannot read properties of undefined (reading 'tier')"){
        setRankedPlayer({
          rank: '',
          wins: '',
          losses: '',
          queueType: '',
          tier: 'Sem pontos de liga.',
          winRate: '',
        });
      }
    } 
  };
 
  return (
    <>
      <Container>
        <Input
          placeholder="Digite o nome do invocador"
          onChange={(e) => setSummonerName(e.target.value)}
        />
        <Button onClick={searchForPlayer} loading={false}>
          Buscar
        </Button>
      </Container>
      {searchSummoner && (
        <Containerimg>
          <Logo image="/yasuo.png" />
        </Containerimg>
      )}
      {error && (
        <Containerimg>
          <Logo image="/blitz.webp" />
          <H1>Invocador Não Encontrado</H1>
        </Containerimg>
      )}
      {!searchSummoner && !error && (
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
