import React, { useState } from 'react'
import styled from 'styled-components';
import LogoText from '../components/Logo';
import Botton from './Botton';

const Seccion = styled.section`
width: 100vw; 
background-color: ${props => props.theme.body};
` 
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
  display: none;
}
@media (max-width: 64em){
.desktop{
  display: none;
}
.mobile{
  display: inline-block;
  }
}

`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items:  center;
list-style: none;

@media (max-width: 64em){


  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width:100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index: 50;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur(2px);
//transform the velocity of the navbar
  transform: ${props => props.click ? 'translateY(0)' :  'translateY(1000%)'};
  transition: all 0.3s ease;


  flex-direction: column;
  justify-content: center;
  touch-action: none;
}
`

const MenuItem =  styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

//efecto after de la linea de abajo de cada item determiba el efecto que tendra el line de los items 
&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}

@media(max-width: 64em){
  margin: 1rem 0;
//en este efecto secundario le estamos diciendo que no queremos animacion
  &::after{
    display: none;
  }
}

`
const HmbuergerMenu = styled.div`
width:  ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)' };


display: none;
justify-content: center;
align-content: center;
cursor: pointer;
transition: all 0.3s ease;

@media(max-width: 64em){
  display: flex;
}

//se usa junto con los pseudo-elementos :before y :after para generar contenido
// que se adjunta antes o después de un selector CSS.
&::after, &::before{
  content: ' ';
  width:  ${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
transition: all 0.3s ease;

}
&::after{
  //
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};

}
&::before{
  bottom:${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};

}
`

const Navigation = () => {

    const [click, setClick] = useState(false);

    const ScrollTo = (id) =>{
      let element= document.getElementById(id);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',

      })

      setClick(!click);
    }

  return (
    <Seccion id='navigation'>
      <NavBar>
      <LogoText />
      <HmbuergerMenu click={click} onClick={() => setClick(!click)}>
        &nbsp;
      </HmbuergerMenu>
      <Menu click={click}>
       <MenuItem onClick={() => ScrollTo('home')}>Home</MenuItem>
       <MenuItem onClick={() => ScrollTo('about')}>About</MenuItem>
       <MenuItem onClick={() => ScrollTo('roadmap')}>RoadMap</MenuItem>
       <MenuItem onClick={() => ScrollTo('showcase')}>Showcase</MenuItem>
       <MenuItem onClick={() => ScrollTo('team')}>Team</MenuItem>
       <MenuItem onClick={() => ScrollTo('faq')}>Faq</MenuItem>
       <MenuItem>
       {/* dispositivos mobiles se incluye en el menu para despues ser puesto en none */}
       <div className='mobile'>
          <Botton text= "Connect Wallet" link="https://google.com" /> 
       </div>
       </MenuItem>
      </Menu>
      {/* dispositivos de escritorio  */}
      <div className='desktop'>
        <Botton text= "Connect Wallet" link="https://google.com" /> 

      </div>
      </NavBar>  
    </Seccion>
  )
}
 
export default Navigation;