import CardComponent from '../Card/Card'
import React, { useEffect, useState } from "react";
import axios from 'axios';
const HomeCard = (props) => {
    const [prod1, setProd1] = useState([]);
    const [prod2, setProd2] = useState([]);
    const [prod3, setProd3] = useState([]);
    const [prod4, setProd4] = useState([]);
    const [prod5, setProd5] = useState([]);
    const [prod6, setProd6] = useState([]);
    const [prod7, setProd7] = useState([]);
    const [prod8, setProd8] = useState([]);
    const [prod9, setProd9] = useState([]);
    const [prod10, setProd10] = useState([]);
    const [flag, setFlag] = useState(false);

    var id1 = 0, id2 = 0, id3 = 0, id4 = 0, id5 = 0, id6 = 0, id7 = 0, id8 = 0, id9 = 0, id10 = 0
    if (props.name === "men's clothing") {
        id1 = "1"
        id2 = "2"
        id3 = "3"
        id4 = "4"
        id5 = "5"
        id6 = "6"
        id7 = "7"
        id8 = "8"
        id9 = "9"
        id10 = "10"



    }

    if (props.name === "women's clothing") {
        id1 = "16"
        id2 = "17"
        id3 = "18"
        id4 = "19"
        id5 = "5"
        id6 = "6"
        id7 = "7"
        id8 = "8"
        id9 = "9"
        id10 = "10"
    }

    if (props.name === "jewelery") {
        id1 = "5"
        id2 = "6"
        id3 = "7"
        id4 = "8"
        id5 = "9"
        id6 = "10"
        id7 = "11"
        id8 = "12"
        id9 = "13"
        id10 = "14"
    }
   if (props.name === "electronics") {
        id1 = "10"
        id2 = "11"
        id3 = "12"
        id4 = "13"
        id5 = "5"
        id6 = "6"
        id7 = "7"
        id8 = "8"
        id9 = "9"
        id10 = "10"
    }
    const arroHandler = () => {
        setFlag(true);
        console.log(flag)
    }

useEffect(() => {
        getProducts()
    }, []);
    const getProducts = () => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id1,
        }).then(
            (req) => {
                setProd1(req.data);
                // console.log(req.data);
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
                // console.log(req.data);
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
                // console.log(req.data);
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
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios
        ({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id5,
        })
        .then(
            (req) => {
                setProd5(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id6,
        }).then(
            (req) => {
                setProd6(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id7,
        }).then(
            (req) => {
                setProd7(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id8,
        }).then(
            (req) => {
                setProd8(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id9,
        }).then(
            (req) => {
                setProd9(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/" + id10,
        }).then(
            (req) => {
                setProd10(req.data);
                // console.log(req.data);
            },
            (err) => {
                console.log("Error:", err);
            }
        );
    }

    return (
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner" >
                <div class="carousel-item active" >


                    <div class="row" style={{marginLeft:"40px", marginRight:"40px"}}>

                        <div class="col">
                            <CardComponent data={prod7} />
                        </div>

                        <div class="col">
                            <CardComponent data={prod1} />
                        </div>


                        <div class="col">
                            <CardComponent data={prod2} />
                        </div>
                        <div class="col">
                            <CardComponent data={prod6} />
                        </div>

                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row" style={{marginLeft:"40px", marginRight:"40px"}}>

                        <div class="col">
                            <CardComponent data={prod3} />
                        </div>

                        <div class="col">

                            <CardComponent data={prod4} />
                        </div>


                        <div class="col">
                            <CardComponent data={prod5} />
                        </div>

                        <div class="col" >
                            <CardComponent data={prod6} />
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" style={{width:"fit-content", paddingLeft:"10px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                <span class="carousel-control-prev-icon" aria-hidden="true" style={{marginRight:"70px"}}></span>
                <span class="visually-hidden" >Previous</span>
            </button>
            <button class="carousel-control-next" style={{width:"fit-content", paddingRight:"10px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                <span class="carousel-control-next-icon" aria-hidden="true" style={{marginLeft:"50px"}}></span>
                <span class="visually-hidden" >Next</span>
            </button>
        </div>


    )
}

export default HomeCard