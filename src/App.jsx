import React , {useState}  from 'react';
import axios from 'axios';
import ShowTemp from './ShowTemp';

function App() {

 const [city , setCity] = useState("")
 const [data , setData] = useState({
  description: "",
  temp: 0,
  temp_max: 0,
  temp_min: 0,
  humidity: 0,
  sunrise: 0,
  sunset: 0,
  country: ""
 })

 const InputChange = (event) => {
  setCity(event.target.value);
 }

 const handleClick = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdce4521082295374607a152ef02d2c6`)
  .then((response) => {
    setData({
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      country: response.data.sys.country
    })
  })
 }

  return (
    <> 
    <div className="container text-center my-2">
       <h1>Weather App Using React JS</h1>       
       <div className="input-group mb-3">
         <input type="text" className="form-control" value={city} onChange={InputChange}/>
         <button className="btn btn-primary" type='submit' onClick={handleClick}>Get Temp</button>
       </div>
    </div>
    <ShowTemp text={data} />
    </>
    
  );
}

export default App;
