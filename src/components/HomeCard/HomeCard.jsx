import CardComponent from '../Card/Card'
import React, { useEffect, useState } from "react";
import axios from 'axios';


const HomeCard = (props) => {
    const [prod1, setProd1] = useState([]);
    const [prod2, setProd2] = useState([]);
    const [prod3, setProd3] = useState([]);
    var id1 =0, id2 =0, id3=0


if(props.name==="men's clothing") {
 id1="1"
 id2="2"
 id3="3"
}

if(props.name==="women's clothing") {
    id1="16"
    id2="17"
    id3="18"
   }

   if(props.name==="jewelery") {
    id1="6"
    id2="7"
    id3="8"
   }

   if(props.name==="electronics") {
    id1="11"
    id2="12"
    id3="13"
   }

useEffect(() => {
        axios({
          method: "get",
          url: "https://fakestoreapi.com/products/" + id1,
        }).then(
          (req) => {
            setProd1(req.data);
            console.log(req.data);
          },
          (err) => {
            console.log("Error:", err);
          }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id2,
          }).then(
            (req) => {
              setProd2(req.data);
              console.log(req.data);
            },
            (err) => {
              console.log("Error:", err);
            }
          );
          axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id3,
          }).then(
            (req) => {
              setProd3(req.data);
              console.log(req.data);
            },
            (err) => {
              console.log("Error:", err);
            }
          );
      }, []);

  return (
    
    
    <div className='shadow-lg p-1 mt-3'>
        <div>
            <div style={{height:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.2" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,192C672,224,768,256,864,245.3C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
        <h2> 
        <span class="badge bg-dark mx-5 mt-4">Best of {props.name}</span>
        </h2>
            
        </div>
         <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5 p-5">
                <div class="col">
                    <CardComponent data={prod1}/>

                </div>
                <div class="col">
                <CardComponent data={prod2}/>

                </div>
                <div class="col">
                <CardComponent data={prod3}/>
                    </div>
                </div>
            </div>
            
  )
}

export default HomeCard