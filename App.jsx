import './App.css'
import axios, {Axios} from 'axios'
import { useState } from 'react'
import Weather from './components/weather'

function App() {
  const[data,setdata] = useState({})
  const[location, setlocation] = useState("")

  const API_KEY = "56d470e7246f2566b77abe066e27e0f2"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  
  const searchLocation =(event)=>{
    if(event.key === "Enter"){
      axios.get(url).then((response)=>{
        setdata(response.data)
        console.log(response.data)
      })
      setlocation("")
    }
  }
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input type="text" className="py-3 px-6 w-[700px] text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
        placeholder="Enter location"
        value = {location}
        onChange={(event)=> setlocation(event.target.value)}
        onKeyDownCapture={searchLocation} />
      </div>
      <Weather weatherData = {data}/>
    </div>
  );
}

export default App;
