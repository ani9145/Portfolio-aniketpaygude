import "./input.styles.css"
import { useState } from "react"

export const Input=()=>{
    const [gamename,setGamename]=useState("")
    const [gameauthor, setGameauthor]=useState("")
    const [gameprice,setGameprice]=useState("");
    const [gametags,setGametags]=useState("")
return(
    <div>
        <h1>Get in Touch</h1>
    <div id="section5Title"> 
    <input type="text" id="fname" name="firstname" placeholder="Your name"  value={gamename}
            onChange={(e)=> setGamename(e.target.value)} required></input>
    <input type="mail" id="mailid" name="Email" placeholder="Email Address" value={gameauthor}
           onChange={(e)=>setGameauthor(e.target.value)} required></input>
    <input type="text" id="sub" name="Subject" placeholder="Subject"  value={gameprice}
           onChange={(e)=>setGameprice(e.target.value)} required></input>
    <textarea id="msg" name="message" placeholder="Message" value={gametags}
           onChange={(e)=>setGametags(e.target.value)} required></textarea>
   <button style={{cursor: 'pointer'}} type="submit" onClick={(e)=>{
    setGamename("")
    setGameauthor("")
    setGameprice("")
    setGametags("")
   }} >Send Message</button>
 </div>
 </div>
)
}