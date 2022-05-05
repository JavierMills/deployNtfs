import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
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
import ETH from '../../assets/icons8-ethereum-48.png';

//estilo de la seccion completa
const Section = styled.section`
min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 20s;
  }
}

&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;
  }
}
`

const move = keyframes`
0%{ transform: translateX(100%)};
100% { transform: translateX(-100%)}
`
//fila de del componente
const Row = styled.div`
background-color:${props => props.theme.text};
//el comportamiento del espacio en blanco que babra dentro de el elemto
white-space: nowrap;
// el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.
box-sizing: content-box;
margin: 1rem 0;
display: flex;
animation: ${move} linear infinite ${props => props.direction};


`

//estilo de cada item
const ItemContainer = styled.div`
width: 16rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};
border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
}

@media (max-width: 48em){
width: 12rem; 
}

@media (max-width: 30em){
  width: 10rem; 
  }
`


const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
//determina el borde de la parte baja del item

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;

}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};  
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm}; 
    }
}
`

const Price = styled.span`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto; 
}
`




// segundo componente de el iyem y su contenido dentro de la row
const NtfItem = ({img, number=0, price=0, passref}) =>{

let play = (e) => {
  passref.current.style.animationPlayState ='running';

}
let pause = (e) => {
  passref.current.style.animationPlayState ='paused';
}

  return (
    <ItemContainer onMouseOver={e => pause(e)}
     onMouseOut={e => play(e)}>

      <img src={img} alt='the Weirdos' />
     
     <Details>
      <div>
          <span>Weirdos</span> <br />
          <h1> #{number}</h1>
        </div>

        <div>
          <span>Price</span> <br />
          {/* fixed numero de dijitos exadecimales que necesitamos en nuetra antidad  */}
          <Price>
            <img src={ETH} alt='ETH' />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
    
    </Details>


    </ItemContainer>
  )
}


const Showcase = () => {

const Row1Ref= useRef(null);
const Row2Ref= useRef(null);
  return (
    <Section id='showcase'> 
      <Row direction="none" ref={Row1Ref}>
        <NtfItem  number={14} price={0.6}      img={img1} passref={Row1Ref}/>
        <NtfItem  number={10} price={0.5}      img={img2} passref={Row1Ref}/>
        <NtfItem  number={1} price={0.7700001} img={img3} passref={Row1Ref}/>
        <NtfItem  number={3} price={0.502}     img={img4} passref={Row1Ref}/>
        <NtfItem  number={1495} price={0.3002} img={img5} passref={Row1Ref} />


      </Row>

      <Row direction="reverse" ref={Row2Ref}>
        <NtfItem  number={9}  price={4}        img={img6} passref={Row2Ref}/>
        <NtfItem  number={90}  price={0.2}     img={img7} passref={Row2Ref}/>
        <NtfItem  number={45}  price={0.1}     img={img8} passref={Row2Ref}/>
        <NtfItem  number={1000}  price={0.9002}img={img9} passref={Row2Ref} />
        <NtfItem  number={2}  price={0.522}    img={img10} passref={Row2Ref} />

      </Row>

    </Section>
  )
}

export default Showcase