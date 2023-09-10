import PropTypes from 'prop-types';

import './cart.css'
const Cart = ({cart,handleRemoveItem}) => {

    const passparams = ()=>{
     handleRemoveItem(cart.id)
    }

    return (
        <div >
               <h4>cart: {cart.length}</h4>
               <div className="cartContainer">
                {cart.map(bottle => <div key={bottle.key}>
                    <img  src={bottle.img}></img>
                    <button onClick={passparams}>remove</button>

                </div>)}
               </div>
            
        </div>
    );
};

Cart.propTypes ={
   cart: PropTypes.array.isRequired,
   handleRemoveItem: PropTypes.func.isRequired
}

export default Cart;