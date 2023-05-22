import React from 'react'
import { icons } from 'react-icons';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../slice/cartSlice';
import {RiDeleteBinLine} from 'react-icons/ri'
const TestCard = (props) => {
  var q = props.b.quantity;
  var a = props.b;
    const dispatch= useDispatch();
    const updateQuantity=()=>{
      dispatch(cartActions.addItem(props.b, q))
    }
    const plusHandler = ()=>{
      q++;
      updateQuantity();
      console.log("fired");
    }




  return (
    <>
    <div className="card-body">
    
      <div className="row" >
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0" >
        
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" >
            <img data-testid="img1" src={props.b.image}
              className="w-75" alt="no img" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>

        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0" >
          <display4><strong>{props.b.title}</strong></display4>
          <p>{props.b.category}</p>
          <button type="button" onClick={()=> props.data3(props.b)} data-testid="remove-item" className="me-1 mb-2" data-mdb-toggle="tooltip"
            title="Remove item" style={{backgroundColor:"white",border:"0px"}}>
            <i style={{fontSize:"19px",color:"red"}}> <RiDeleteBinLine/></i>
          </button>
          
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" >
            
          <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
            <button className="btn btn-dark px-3 ms-2" data-testid="minus" style={{height:"40px"}}
              onClick={()=>props.data2(props.b)}>
              <i className="fas fa-minus"></i>
            </button>
            <button className='btn btn-light mx-2' data-testid="res">{props.b.quantity}</button>
            <button className="btn btn-dark px-3" data-testid="plus" style={{height:"40px"}}
              onClick={plusHandler}>
              <i className="fas fa-plus"></i>
            </button>



          </div>
          <p className="text-start text-md-center">
            <strong>${props.b.price}</strong>
          </p>
          
        </div>
      </div>
     
      <hr className="my-3" />
    </div>
    </>
  )
}
export default TestCard