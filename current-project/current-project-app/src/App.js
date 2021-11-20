import React, {useState} from 'react'

class App extends React.Component {

}

function App() {

  const [count, setCount] = useState(4)

  return (
    <>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </>
  );
}

export default App;
