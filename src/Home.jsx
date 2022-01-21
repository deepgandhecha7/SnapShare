import React from "react";
import im from './Image-first.jpg';
import './Home.css';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";

const Home=()=>{
    return(
        <>
            <div className="card">
                <div>
                    <img src={im} alt="myimg"/>

                </div>
                <div className="button">
                    <h1>Welcome</h1>

                    
                    <Button 
            style={{
              backgroundColor: "White",
              color: "green",
              fontSize: "20px",
              marginTop: "20px",
            }}
            variant="contained"
          >
            <strong>Enter</strong>
          </Button>
                    

                </div>

            </div>
        </>
    );


}

export default Home;