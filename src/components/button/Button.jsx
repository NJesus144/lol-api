import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;

  &:hover{
  background-color: #f02727;

  }
`;

export default function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
