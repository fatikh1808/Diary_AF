import styled, {css} from 'styled-components';

const Input = styled.input`
     height: 25px;
    margin-bottom: 11.5px;
    border-radius: 3px;
    border-width: 0.6px;
    outline: none;
    padding-left: 5px;

    :focus {
    -webkit-box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
}

:hover {
  -webkit-box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.8);
}

 ${props => props.primary && css`
    grid-area: "inputPhone";
  `} 
  
 ${props => props.secondary && css`
    grid-area: inputN;
    margin-right: 25px;
    justify-self: right;
    width: 200px;
  `}
  
  ${props => props.danger && css`
    grid-area: inputL;
    margin-right: 25px;
    width: 200px;
    justify-self: right;
  `}
    
  ${props => props.basic && css`
    grid-area: inputD;
    margin-right: 25px;
    justify-self: right;
    width: 200px;
  `}
  
`

export default Input;