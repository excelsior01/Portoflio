import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring';
import "./styles/card.scss";


const Card = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
      <div className="card" onClick={() => set(state => !state)}>
        <a.div className="c back portfolio-item " style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div className="c front portfolio-item  " style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
      </div>
    )
}

export default Card
