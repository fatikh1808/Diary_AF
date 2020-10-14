import styled, {css} from 'styled-components';

const Button = styled.button`
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

 ${props => props.chatButton && css`
    grid-area: "ChatButton";
    height: -webkit-fill-available;
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
    padding: 0;
    padding-top: 5px;
    background-color: white;
  `} 
  
`

export default Button;