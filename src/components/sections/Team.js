import React from 'react'
import styled from 'styled-components'
import ConfettiComponent from '../Confetti'

import img1 from '../../assets/Nfts/edit1.svg';
import img2 from '../../assets/Nfts/MF.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead-10.svg';
import img11 from '../../assets/Nfts/bighead-11.svg';
import img12 from '../../assets/Nfts/bighead-12.svg';



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: rgb(217, 255, 0);
width: fit-content;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};

@media(max-width: 40em){
  font-size: ${props => props.theme.fontxl};

}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;

justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media(max-width: 64em){
  width:80%;
}

@media(max-width: 48em){
  width:90%;
  justify-content: center;
}
`



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//styled componente card member
const ImgContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.corouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;
border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;
//permite aplicar efectos gráficos 
// como el desenfoque o el cambio de color al área detrás de un elemento
backdrop-filter: blur(4px);


&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media(max-width: 30em){
  width:70vw;
  
}
`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
font-weigth:400;
margin-top:1rem;


`
const Position = styled.p`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
// margin-top:1rem;

`



const MemberComponent = ({img, name=" ", position=" "}) =>{




  return(
    <Item>
      <ImgContainer>
        <img src={img} alt='' />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}




const Team = () => {
  return (
    <Section id='team'>
      <ConfettiComponent /> 
      <Title >Team.</Title>
      <Container>
      <MemberComponent img={img1}  name='Avure' position='Co-Funder' />
      <MemberComponent img={img2}  name='Skills' position='Founder' />
      <MemberComponent img={img3}  name='Evex' position='Co-Funder' />
      <MemberComponent img={img4}  name='Sindresu' position='Developer' />
      <MemberComponent img={img5}  name='Hands' position='Backend' />
      <MemberComponent img={img6}  name='Vo' position='FullStack' />
      <MemberComponent img={img7}  name='Kirby' position='Python Dev' />
      <MemberComponent img={img8}  name='Zapdos' position='Artist' />
      <MemberComponent img={img9}  name='Mortres' position='Front Developer' />
      <MemberComponent img={img10} name='Huskers' position='UI UX'  />
      <MemberComponent img={img11} name='Paikujan' position='Design'  />
      <MemberComponent img={img12} name='Psically' position='Lider'  />
    </Container>
    </Section>

    
  )
}

export default Team