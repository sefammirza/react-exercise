import React, {useState, useEffect} from "react";
import {useFetch} from "./useFetch";

const App = () => {

  const [count, setCount] = useState(0);
  const {data} = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );


   function computeLongestWord () {
     if (!data) {
       return [];
      }

      let longestWord = "";

      data.forEach(sentence =>
        sentence.split(" ").forEach(word => {
          if(word.length> longestWord.length){
            longestWord = word;
          }
        })
        )
   }



  return(
    <div>
      <div>count: {count}</div>
      <button onClick={() =>setCount(count+1)}>increment</button>
    </div>
  )
};

export default App;