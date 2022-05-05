import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Up = styled.div`
width: 3rem;
height: 3rem;

box-sizing: border-box;
margin: 0;
padding: 0;
background-color:  ${props => props.theme.text};
color: ${props => props.theme.body};

position: fixed;
font-size: ${props => props.theme.fontxl};
right: 1rem;
bottom: 1rem;

cursor: pointer;
 display: none;
 justify-content: center;
 align-items: center;

 border-radius: 50%;
transition: all 0.2s ease;


 &:hover{
     transform: scale(1.2);
 }

 &:active{
     transform: scale(0.9);
 }
`


export const ScrollTop = () => {

    const scrollToTop= () => {
        let element = document.getElementById('navigation');
    
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
//guardar la referencia para que cuando el display este en 200 aparece y menos de 200 desaparece
      const ref = useRef(null);
      const { y } = useWindowScroll();

      useLayoutEffect(() => {
      if(y > 200){
        ref.current.style.display= 'flex'
      }else{
        ref.current.style.display= 'none'

      }
      }, [y])

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
        &#x2191;    
    </ Up>
  )
}
