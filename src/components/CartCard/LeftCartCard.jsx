import React from 'react'
import { useDispatch} from 'react-redux';
import { cartActions } from '../../slice/cartSlice';
const TestCard = (props) => {
  var q = props.b.quantity;
  var a = props.b;
    const dispatch= useDispatch();
    const updateQuantity=()=>{
      dispatch(cartActions.addItem(props.b, q))
    }
    const handleRemoveFromCart = (a)=>{
      dispatch(cartActions.removeFromCart(a));
    }
    const minusHandler = (a) =>{
      dispatch(cartActions.decreaseCart(a));
    }
    const plusHandler = ()=>{
      q++;
      updateQuantity();
    }

  return (
    <>
    <div className="card-body">
    
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src={props.b.image}
              className="w-75" alt="no img" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>

        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <display4><strong>{props.b.title}</strong></display4>
          <p>{props.b.category}</p>
          <button type="button" onClick={()=> handleRemoveFromCart(props.b)} className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
            title="Remove item">
            <i className="fas fa-trash"></i>
          </button>
          {/* <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
            title="Move to the wish list">
            <i className="fas fa-heart"></i>
          </button> */}
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            
          <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
            <button className="btn btn-dark px-3 ms-2" style={{height:"40px"}}
              onClick={()=>minusHandler(props.b)}>
              <i className="fas fa-minus"></i>
            </button>
            <div><button className='btn btn-light mx-2'>{props.b.quantity}</button> </div>
            <button className="btn btn-dark px-3" style={{height:"40px"}}
              onClick={plusHandler}>
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <p className="text-start text-md-center">
            <strong>${props.b.price}</strong>
          </p>
          
        </div>
      </div>
    
      <hr className="my-4" />
    </div>
    </>
  )
}
export default TestCard