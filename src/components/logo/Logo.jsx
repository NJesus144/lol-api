import styled from "styled-components";

const StyledImage = styled.img`
width: 300px;

@media(max-width:400px){
  width: 200px;
} 
`;

export default function Logo({ image }) {
  return (
    <div>
      <StyledImage src={image} />
    </div>
  );
}

Logo.defaultProps = {
  image: "/league-logo.png"
}