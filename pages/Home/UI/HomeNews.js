import axios from "axios";
import { useEffect, useState } from "react";
import { useStateManager } from "react-select";

export default function HomeNews() {
    const [ data, setData ] = useState()
    // const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news15.p.rapidapi.com/news/amb',
  headers: {
    'X-RapidAPI-Key': 'c7daca4ed7mshc322542182d134fp18f899jsn8bf35239fa08',
    'X-RapidAPI-Host': 'crypto-news15.p.rapidapi.com'
  }
};
// useEffect(() => {
//       axios.request(options).then(function (response) {
//           setData(response.data);
//       }).catch(function (error) {
//           console.error(error);
//       });
//   },[])

  return (
    <div>
      {data && data.map((news) => (
        <div key={data.title}>
            {data.title}
        </div>
      ))}
    </div>
  )
}
