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
  transition: all 0.3s;
  margin-left: 20px;
  width: 100px;
  height: 40px;

  &:hover {
    background-color: #ff0101;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export default function Button({ children, onClick, disabled, loading }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled || loading}>
      {loading && <img src="/loading.svg" width="16px" />}
      {!loading && children}
    </StyledButton>
  );
}
