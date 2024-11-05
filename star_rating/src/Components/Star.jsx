import React from 'react'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Star = ({noOfStars}) => {
    const [rating, setRating] = useState()
    const [hover,setHover] = useState()

    function handleclick(index){
        setRating(index);
    }

    function handleMove(index){
    setHover(index)
    }
    function handleLeave(index){
    setHover(rating)
    }
  return (
    <div>
      {
        [...Array(noOfStars)].map((_,index) => {
            index += 1
            return <FaStar
            key={index}
            className={index <= (rating || hover) ? "active" : " inactive"}
            onClick={()=> handleclick(index)}
            onMouseMove={() => handleMove(index) }
            onMouseLeave={() => handleLeave(index)}

            />
          
            
        })
    
      }
    </div>
  )
}

export default Star
