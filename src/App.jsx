

import { useEffect, useState } from 'react';
import './App.css'
import Watch from './componenets/Watch/watch';
import Botels from './componenets/bottels/Botels'; 
import { addTols, getStoreCart } from './utilities/localstorage';
import Cart from './componenets/cart/Cart';


function App() {
  const [watches, setWathes] = useState([])
  useEffect( () =>{
    fetch('watchs.json')
    .then(res => res.json())
    .then(data => setWathes(data))
  },[])

  const [bottels, setBottels] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('botels.json')
    .then(res => res.json())
    .then(data => setBottels(data))
  },[])

  // load cart from localstorage
  useEffect(() =>{

    if(bottels.length> 0){
      
      const storecart = getStoreCart();
      const saveCart = []
      console.log(storecart,bottels)
      for(const id of storecart){
        console.log(id);
        const bottle = bottels.find(bottel => bottel.id === id);
        if(bottle){
          saveCart.push(bottle)
        }
      }
      setCart(saveCart);
    }

  },[bottels])

  // add item to cart
  const handleBottel = bottel =>{
    const newCart = [...cart, bottel];
    setCart(newCart);
    addTols(bottel.id)
  }
  // remove item from cart
  const handleRemoveItem = id =>{
      //  visual cart remove
       
      const remainingCart = cart.filter(bottle => bottle.id !== id);
      setCart(remainingCart)

      // local 
      removeFromLs(id)
  }


  return (
    <>
     
      <h1>Vite + React</h1>

      {
        watches.map((watch,idx) => <Watch key={idx} watch={watch}></Watch>)
      }
   
      <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
        
      <div className='bottels-Container'>
      {
        bottels.map(botel => <Botels  key={botel.id} handleBottel={handleBottel} botel={botel}></Botels>)

      }
      </div>
     
  
     
    </>
  )
}

export default App
