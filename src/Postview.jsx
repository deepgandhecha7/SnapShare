import React, { useEffect, useState } from "react";
import "./Postview.css";
import Camera from "./images/Camera.svg";
import Intagram from "./images/Instagram.svg";
import heart from "./images/heart-regular.svg";
import telegram from "./images/telegram.svg";


const Postview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((request) => request.json())
      .then((response) => setData(response));
      console.log(data);
  }, []);
  
   
   
  return (
    <>
      <div className="site-container">
        <div className="header">
          <div className="insta-icon">
            <img src={Intagram} alt="insta-icon" className="camera-image" />
            <h1>InstaClone</h1>
          </div>
          <div className="cam-img">
            <img src={Camera} alt="insta-icon" className="camera-image" />
          </div>
        </div>
        
          {data.map((val, i) => {
            // debugger
            return (
              <>
              
                <div className="main" key={i}>
                  <div className="post">
                    <div className="post-top">
                      <h4 className="name">{val.name}</h4>
                      <p className="location">{val.location}</p>
                    </div>
                    <div>
                      <p className="three-dot">
                        <strong>...</strong>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={val.PostImage}
                      alt="Post-img"
                      className="post-img"
                    />
                  </div>
                  <div>
                    <div className="post-bottom">
                      <div className="icn">
                        <img src={heart} className='far' alt="Alt" />
                        <img src={telegram} className='fab' alt="Net" />
                        
                      </div>
                      <div>
                        <p className="date"> {val.Date}</p>
                      </div>
                    </div>
                    <div>
                      <p className="like">{val.likes} likes</p>
                      <p className="des"><strong>{val.description}</strong></p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
    </>
  );
};
export default Postview;