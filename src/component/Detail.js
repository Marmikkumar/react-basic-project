import React from 'react'
// import Home from "./Home"

const Detail=(probs)=> {
  return (
    <div className='detail'>
        <div className='foodbox'>
            <div className='foodimg'>
                <img src={probs.image} alt=''></img>
            </div>
            <div className='food-title'>
                <h3>{probs.title}</h3>
                <p>{probs.intro}</p>
                <button>${probs.cost}</button>
            </div>
        </div>
    </div>
  )
}

export default Detail;