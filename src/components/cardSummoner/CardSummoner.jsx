import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 100px;
  width: 700px;
  padding: 20px;
  border-radius: 10px;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLine = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledConentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInfoSummoner = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  font-weight: bold;
`;


const StyledImage = styled.img``;
const StyledImageElo = styled.img``;

const StyledH1 = styled.h1``;
const StyleWins = styled.h2`
color: #dbdb21e2;
`;
const StyleLosses = styled.h2`
color: #f02c2c;
`;

const StyledH2 = styled.h2`
  margin-left: 20px;
`;

const StyledBottomInfo = styled.div`
display: flex ;
justify-content: space-around;
align-items: center;
`;

const StyledMatches = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;
const StyledWinRate = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid ${(props) => props.theme.colors.white};
height: 120px;
width: 120px;
border-radius: 50%;
text-align: center;
`;

export default function CardSummoner({profileIcon, name, summonerLevel, tier, rank, wins, losses, winRate}) {
  
  function validateElo(elo) {
    switch (elo) {
      case "BRONZE":
        return <StyledImageElo src="/Emblem_Bronze.png" alt="elo" width="150"/>;
      case "IRON":
        return <StyledImageElo src="/Emblem_Iron.png "alt="elo" width="150"/>;
      case "SILVER":
        return <StyledImageElo src="/Emblem_Silver.png "alt="elo" width="150"/>;
      case "GOLD":
        return <StyledImageElo src="/Emblem_Gold.png "alt="elo" width="150"/>;
      case "PLATINUM":
        return <StyledImageElo src="/Emblem_Platinum.png "alt="elo" width="150" />;
      case "DIAMOND":
        return <StyledImageElo src="/Emblem_Diamond.png "alt="elo" width="150"/>;
      case "GRANDMASTER":
        return <StyledImageElo src="/Emblem_Grandmaster.png "alt="elo" width="150"/>;
      case "MASTER":
        return <StyledImageElo src="/Emblem_Master.png "alt="elo" width="150"/>;
      case "CHALLENGER":
        return <StyledImageElo src="/Emblem_Challenger.png "alt="elo" width="150"/>;
      default: break;
    }
  }
  
  
  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${profileIcon}.png`} width="150" />
        <StyledConentInfo>
          <StyledH1>{name}</StyledH1>
          <StyledInfoSummoner>
            <StyledSpan>Nível: {summonerLevel}</StyledSpan>
            <StyledH2>{tier} {rank}</StyledH2>
          </StyledInfoSummoner>
        </StyledConentInfo>
        <StyledImageElo   />
        {validateElo(tier)}
      </StyledContent>
      <StyledLine />
      <StyledBottomInfo>
        <StyledMatches>
          <StyleWins> Wins: {wins}</StyleWins>
          <StyleLosses> Losses: {losses}</StyleLosses>
        </StyledMatches>
        <StyledWinRate>
          <StyledSpan>{winRate}%</StyledSpan>
          <StyledSpan>Win Rate</StyledSpan>
        </StyledWinRate>
      </StyledBottomInfo>
    </StyledContainer>
  );
}
