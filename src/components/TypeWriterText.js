import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import "@fontsource/akaya-telivigala"
import Bottom from './Botton'


const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}
.text-1{
    color: rgb(236, 183, 38); 
}
.text-2{
    color: rgb(31, 175, 26);
}
.text-3{
    color: #492b7c;
}
@media(max-width: 70em){
    font-size: ${props => props.theme.fontxl};
}
@media(max-width: 48em){
    align-self: center;
    text-align:center;
}
@media(max-width: 40em){
    width: 90%;
}
    
`

const SubTitle= styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-decoration: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media(max-width: 40em){
    font-size: ${props => props.theme.fontmd};
}
@media(max-width: 48em){
    align-self: center;
    text-align:center;
}

`

const BotomContainer = styled.div`
width: 80%;
align-self: flex-start;

@media(max-width: 48em){
    align-self: center;
    text-align:center;


    buttom{
        margin: 0 auto;
    }
}
`



const TypeWriterText = () => {
  return (
   <>
     <Title>
        Enjoy a new era AWESOME
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NTFs. </span>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<span class="text-2">Collectible Items. </span>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<span class="text-3">Ape Killers! </span>')
    .pauseFor(1500)
    .deleteAll()
    .start()
     }}
/>

    
    </Title>
     <SubTitle>
     Bored Of Ages? Try SomeThing New.
 </SubTitle>
    <BotomContainer>

 <Bottom text="Explore" link="#about" />

    </BotomContainer> 
   </>
  );
};

export default TypeWriterText