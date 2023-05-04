import CardComponent from '../Card/Card'
import React, { useEffect, useState } from "react";
import axios from 'axios';


const HomeCard = (props) => {
    const [prod1, setProd1] = useState([]);
    const [prod2, setProd2] = useState([]);
    const [prod3, setProd3] = useState([]);
    const [prod4, setProd4] = useState([]);
    var id1 =0, id2 =0, id3=0,id4=0


if(props.name==="men's clothing") {
 id1="1"
 id2="2"
 id3="3"
 id4="4"
}

if(props.name==="women's clothing") {
    id1="16"
    id2="17"
    id3="18"
    id4="19"
   }

   if(props.name==="jewelery") {
    id1="5"
    id2="6"
    id3="7"
    id4="8"
   }

   if(props.name==="electronics") {
    id1="10"
    id2="11"
    id3="12"
    id4="13"
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
          axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id4,
          }).then(
            (req) => {
              setProd4(req.data);
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
            <div style={{height:"8px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.6" d="M0,288L80,256C160,224,320,160,480,144C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>                       
                   </div>
        
        <div className="mx-4 mt-4" style={{color:'black'}}><h4 className='display-6'> Explore Best of {props.name}...</h4></div>
        
            
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
                    <div class="col">
                <CardComponent data={prod4}/>
                    </div>
                </div>
            </div>
            
  )
}

export default HomeCard