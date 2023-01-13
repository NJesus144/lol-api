import styled from "styled-components";

const StyledImage = styled.img`
width: 300px;
`;

export default function Logo() {
  return (
    <div>
      <StyledImage src="/league-logo.png" />
    </div>
  );
}
