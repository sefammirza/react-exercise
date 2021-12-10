import React, {useState} from 'react'
import './Item.css'
import Card from '../card/Card'

const Item = ({card}) => {

    const [showLogo, setShowLogo] = useState(true)

    return (
        <div className='card' onClick={()=>setShowLogo (!showLogo)}>
            {showLogo ?
            <>
            <img className='card-logo' src={card.img}/>
            <h1 className='card-title'>{card.title}</h1>
            </>
            :
            <ul className='list'>
                {card.options.map((optElement, i) => {
                    return <li key={i}>{optElement}</li>
                })}
            </ul>
        }
        </div>
    )
}

export default Item
