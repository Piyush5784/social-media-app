
import './App.css'
import { FaWifi } from "react-icons/fa"
import { GiNetworkBars } from "react-icons/gi";
import { IoIosBatteryFull } from "react-icons/io";
import { GoBell } from "react-icons/go";
import img from "./assets/image.jpg";
import { CiHeart } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { useRef, useState, useEffect } from 'react';

function App() {

  let [msg, setMsg] = useState("");


  let date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  const formattedTime = `${hours}:${minutes}`;





  let posting = useRef();

  const [post, setPost] = useState([]);


  function postHandler() {
    let currText = posting.current.value;
    posting.current.value = "";

    if (currText === "") {
      setMsg("Write anything before posting")
    }
    else {
      setPost([...post, currText]);
    }
  }


  return (
    <>
      <div className="alert alert-info " style={{ marginBottom: "30px", textAlign: "center" }} role="alert">
        {msg}
      </div>

      <div className="iphone " style={{ height: "560px", overflow: "auto", border: "10px solid black", width: "270px", borderRadius: "35px", display: "flex", flexDirection: "column" }}>


        <nav style={{ width: "100%", borderRadius: "28px", display: "flex", justifyContent: "center", marginTop: "10px" }}>

          <div className="date" style={{ display: "flex", justifyContent: "space-between", width: "91%" }}>
            {formattedTime}
            <div className="icons" style={{ display: "flex", justifyContent: "space-evenly", width: "25%" }}>
              <GiNetworkBars />
              <FaWifi />
              <IoIosBatteryFull />
            </div>
          </div>
        </nav>

        <div className="heading" style={{ height: "64px", width: "92%", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "7px" }}>

          <div className="circle" style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>


            <p style={{ color: "white", fontSize: "12px", textAlign: "center" }}>social</p>
          </div>

          <GoBell style={{ fontSize: "22px" }} />

        </div>

        <h1 style={{ marginLeft: "11px" }}>Feed</h1>
        <div className='center'>
          <input type="text" ref={posting} style={{ width: "70%", height: "35px", borderRadius: "20px", border: "none", textAlign: "center" }} placeholder='Type something... '  >

          </input>
          <button style={{ fontSize: "23px", border: "none", background: "none", width: "20%", marginTop: "4px" }} onClick={() => postHandler()} className='post_button' ><PiTelegramLogoThin className='hover' /></button>


        </div>



        {post.map((item) => <div key={item} className="card" style={{ height: "33%", width: "90%", border: '1px solid white', margin: "12px", borderRadius: '10px' }}>

          <div className="head" style={{ height: "43px", width: "100%", borderRadius: "10px", display: 'flex', alignItems: "center" }}>

            <div style={{ height: "30px", width: "30px", borderRadius: "50%", marginLeft: "11px", }}>
              <img src={img} style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="" />
            </div>
            <div className="text" style={{ fontSize: "10px", marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
              <p style={{ fontWeight: "bold", height: "2px" }}>Chris Evans</p>
              <p style={{ color: "grey", height: "5px", marginBottom: "15px" }}>{formattedDateTime} {hours > 12 ? "PM" : "AM"}</p>
            </div>
            <div style={{ marginLeft: "50px" }}>
              <p>...</p>
            </div>







          </div>

          <div className="text" style={{ fontSize: "13px", marginTop: "10px", marginLeft: "12px" }}>

            {/* <span style={{ color: "blueviolet" }}>@Tom West </span> */}

            <span> {item} 🎉</span>
            <p style={{ color: "blueviolet" }}>#rockstar #welldone</p>
          </div>

          <span ><button style={{ backgroundColor: "blueviolet", color: 'white', borderRadius: "20px", border: "none", fontSize: "9px", height: "18px", marginLeft: "10px" }}>#New_post</button></span>


          <span ><button style={{ backgroundColor: "blueviolet", color: 'white', borderRadius: "20px", border: "none", fontSize: "9px", height: "18px", marginLeft: "10px" }}>+ 10 pts</button></span>

          <hr className='line' />
          <CiHeart style={{ marginLeft: "11px", color: "red" }} onClick={() => onclickHandler} />

        </div>)}

      </div>

    </>
  )
}

export default App
