import {useState} from 'react'
import ComponentC from './ComponentC'

function ComponentB() {

    const [name, setName] = useState('Truly Mittal')

    return (
        <div>
            <h3>Component B</h3>
            <p>Name is: {name}</p>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
