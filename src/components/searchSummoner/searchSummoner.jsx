import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";

const Container = styled.div`
  margin: auto;
  width: 500px;
  margin-top: 100px;
`;

export default function SearchSummoner() {
  const [textSummoner, setTextSummoner] = useState();
  const [playerData, setPLayerData] = useState({});
  const [rankedPlayer, setRankedPlayer] = useState({});
  const API_KEY = "RGAPI-61a89a6e-8e01-4fca-be4c-0c16229830d8"; 

  const searchForPlayer = async (event) => {
    const res = await axios
     .get(`https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${textSummoner}?api_key=${API_KEY}`) 
     .catch((e) => alert("Houve um erro ao buscar summoner"));
     
    console.log(res.data)
    setPLayerData(res.data)
    const { id } = res.data
    searchRanked(id)
  };

  const searchRanked = async (id) => {
    const res = await axios 
     .get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
     .catch((e) => alert("Houve um erro ao buscar summoner"));

     const { tier, rank, wins, losses, queueType, } = res.data[1]  
     ? res.data[1]
     : res.data[0];

       setRankedPlayer( {tier, rank, wins, losses, queueType, winRate: ((wins / (wins + losses)) * 100).toFixed(1), })
  };


  return (
    <Container>
      <input onChange={(e) => setTextSummoner(e.target.value)} />
      <button onClick={searchForPlayer}>Pesquisar</button>
     
          <p>{playerData.name}</p>
          <p>{playerData.id}</p>
          <p>Summoner level: {playerData.summonerLevel}</p>
          <p>{rankedPlayer.wins}123</p>
          
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerData.profileIconId}.png`}
            width="100"
            alt=""
          />
    
    </Container>
  );
}
