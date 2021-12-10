import {useContext} from 'react'
import {CounterContext} from '../contexts/CounterContext'

function ComponentA() {

    const {count} = useContext(CounterContext)

    return (
        <div style={{backgroundColor: 'wheat'}}>
            <p>Count: {Count}</p>
        </div>
    )
}

export default ComponentA
