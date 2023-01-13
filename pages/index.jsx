import SearchSummoner from "../src/components/searchSummoner/searchSummoner";
import Logo from "../src/components/logo/Logo";
import styled from "styled-components";

const Container = styled.div`

  margin: 0 auto;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;

export default function homePage() {
  return (
    <Container>
      <Content>
        <Logo />
        <SearchSummoner />
      </Content>
    </Container>
  );
}
