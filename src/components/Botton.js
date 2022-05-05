import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
online: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.5rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease; 
z-index:2;
&:hover{
    transform: scale(0.9);
}

//borde negro en el contorno del boton
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transform: all 0.2s ease;

    
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;    
}
`
const Botton = ({text, link}) => {
  return (
    <Btn>
        <a href={link} arial-label= {text} target="_blank" rel='noreferrer' > 
            {text}

        </a>
    </Btn>
  )
}

export default Botton