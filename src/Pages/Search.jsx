import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import CardComponent from '../components/Card/Card';
import axios from 'axios'

const Search = () => {
    const [query, setQuery] = useSearchParams();   
  const [data, setData] = useState([]);
  const [searched,setsearched] = useState([])

  useEffect(() => {
    // alert("Bring Item and then display!")
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/category/`+query.get('q')
    }).then((res) => {
      console.log("Response from api ", res.data);
      setData(res.data)
    }, (error) => {
      console.log("Error from api is ", error)
    })
    s();
  })

  const s =()=>{
    const finaldata=data.filter(x=>x.category===query.get('q'))
    setsearched(finaldata);
  }
  return (
    <div>
      <div className='heading'>You have Search for {query.get('q')}</div>
      <div >
        <h1 style={{ fontFamily: "cursive" }} className='heading text-danger'>Products</h1>
        
        <div className="col-md-12">
          {searched?.map((items) => {
            return <CardComponent data={items} />;
          })}
         
        </div>
      </div>
    </div>
  )
}

export default Search