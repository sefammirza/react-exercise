import React from 'react'
import './Card.css'
import Item from '../item/Item'
import { categories } from '../helper/data'

const Card = () => {
    return (
        <div className='card-area'>
            <h2 className='language-title'></h2>
            <div className='card-container'>
                {categories.map((value, index) => {
                    return <Item card={value} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Card
