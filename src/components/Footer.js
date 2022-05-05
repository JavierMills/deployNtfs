import React from 'react'
import styled from 'styled-components'
import { Banner } from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import GitHub from '../Icons/Github'


const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
// justify-content: center;
// align-items: center;
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto ;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em){
  width: 90%;
  h1{
    font-size: ${props => props.theme.fontxxxl};
  }
}

@media (max-width: 48em){
  width: 90%;
}
`
const Left = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media (max-width: 48em){
  width: 100%;
}

`
const IconsList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
const MenuItems = styled.div`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em){
  display: none;
}
`

const Item = styled.li`
//no ocupa toda la anchura disponible. Sólo crece en función de su contenido.
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.2s ease;
}
&:hover::after{
  width: 100%;
  
}

`
const Boton = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
a{
  text-decoration: underline;
}

@media (max-width: 48em){
 flex-direction: column;
 width: 100%;

 span{
   margin-bottom: 1rem;
 }
}
`


const Footer = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <Section>
      <Banner />
      <Container>
          <Left>
            <Logo />
            <IconsList>
            <a href='https://www.facebook.com/ArteMills' target='_blank' rel="noreferrer">
              <Facebook />
              </a>
              <a href='https://twitter.com/JavierMills7?t=Tc5ecKkRkBMSxdNrfVRKew&s=09' target='_blank' rel="noreferrer">
              <Twitter />
              </a>
              <a href='https://www.instagram.com/dime_mills/' target='_blank' rel="noreferrer">
              <Instagram />
              </a>
              <a href='https://www.linkedin.com/in/ramiro-javier-martinez-cruz-816095224' target='_blank' rel="noreferrer">
              <LinkedIn/>
              </a>
              <a href='"https://github.com/JavierMills"' target='_blank' rel="noreferrer">
              <GitHub />
              </a>
            </IconsList>
          </Left>
         <MenuItems>
            <Item onClick={() => scrollTo("home")}>Home</Item>
            <Item onClick={() => scrollTo("about")}>About</Item>
            <Item onClick={() => scrollTo("roadmap")}>RoadMap</Item>
            <Item onClick={() => scrollTo("team")}>Team</Item>
            <Item onClick={() => scrollTo("faq")}>Faq</Item>
            <Item onClick={() => scrollTo("showcase")}>ShowCase</Item>
         </MenuItems> 
      </Container>
      <Boton>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href='https://www.facebook.com/ArteMills' target="_blank" rel='noopener noreferrer' >
            Javier Mills
          </a>
        </span>
      </Boton>
    </Section>
  )
}

export default Footer