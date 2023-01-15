import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #db0404;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;
  margin-left: 20px;

  &:hover{
  background-color: #ff0101;

  }
`;

export default function Button({children, onClick}) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
