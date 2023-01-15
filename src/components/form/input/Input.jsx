import styled from "styled-components"

const StyledInput = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  color: #9c9c9c;
  height: 40px;

  @media(max-width:400px){
  width: 100%;
} 
 
`

export default function Input({...props}) {
  return (
    <StyledInput {...props}/>
  )
}