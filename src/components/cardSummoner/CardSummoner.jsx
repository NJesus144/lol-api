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

export default function CardSummoner() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src="/icon.jfif" width="150" />
        <StyledConentInfo>
          <StyledH1>top1912</StyledH1>
          <StyledInfoSummoner>
            <StyledSpan>Nível: 278</StyledSpan>
            <StyledH2>MASTER</StyledH2>
          </StyledInfoSummoner>
        </StyledConentInfo>
        <StyledImage src="/Emblem_Diamond.png" width="150" />
      </StyledContent>
      <StyledLine />
      <StyledBottomInfo>
        <StyledMatches>
          <StyleWins> Wins: 24</StyleWins>
          <StyleLosses> Losses: 14</StyleLosses>
        </StyledMatches>
        <StyledWinRate>
          <StyledSpan>63%</StyledSpan>
          <StyledSpan>Win Rate</StyledSpan>
        </StyledWinRate>
      </StyledBottomInfo>
    </StyledContainer>
  );
}
