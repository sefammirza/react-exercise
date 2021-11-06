import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    /* fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setData(data.splice(0, 10))); */
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data =await response.json();
      setTimeout(() => {
        setData(data.splice(0, 10))
        setIsLoading(false)
      },3000)

    })();
  },[])
  return (

    <div>
      {isLoading ? <div>Loading </div>: 
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.body}</li>
        })}
      </ul>}
    </div>
  );
}

export default App;
