import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



const ConfettiComponent = () => {
    const { width, height } = useWindowSize()
    return (
      <Confetti
       numberOfPieces={500}
       gravity={0.05}
        width={width}
        height={height * 2.8}
       
      />
    )
}
export default ConfettiComponent