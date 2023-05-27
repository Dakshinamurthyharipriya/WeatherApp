import React, { useState } from "react"
import style from "./Components/style.module.css"
const App=()=>{
    const[city,setCity]=useState("")
    const[result,setResult]=useState("")
    const change=(e)=>{
        setCity(e.target.value);
    }
    const submitt=(e)=>{
        e.preventDefault()
        // console.log(city);
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    response=>response.json()
 ).then(data =>{
    const Kelvin=data.main.temp;
    const celsius=Kelvin-273.15;
    setResult("Tempature at "+" "+city+" "+Math.round(celsius)+"°C")
    setCity("");
 })
 }
    return(
        <div id={style.chill}>
            <section >
                <div className="card">
                    {/* <div className="card-body"> */}
                        <h1 id={style.inout} className="card-title">Weather App</h1><br />
            <form onSubmit={submitt} >
                <input id={style.in} type="text" name="city" value={city} onChange={change}/><br /><br />
                <input id={style.out} type="submit" value="Get Tempature" /><br /><br />
            </form>
            <h1 id={style.up}>{result}</h1>
{/* 
                    </div> */}
                </div>
            </section>
        </div>
    )
}
export default App