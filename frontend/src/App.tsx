import { useEffect,useState} from 'react'

function App(){
  const[data, setData] = useState("Connecting...");

  useEffect(() =>{

fetch("http://127.0.0.1:8000/")
.then(res => res.json())
.then(json => {setData(json.message);});
  } ,[]);

  return(
    <div>
      <h1>learntopia</h1>
      <p>status:{data}</p>
    </div>
  )

}

export default App;