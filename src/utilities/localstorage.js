const getStoreCart = ()=>{
     const storeCartString = localStorage.getItem('cart');
     if(storeCartString){
        return JSON.parse(storeCartString)
     }
     return [];
}
const saveCartTols = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addTols = id =>{
    const cart = getStoreCart();
    cart.push(id);
    // save to local storage
    saveCartTols(cart);
}
// remove 
const removeFromLs = id =>{
    const cart = getStoreCart();
    const remaining = cart.filter(idx => idx != id);
    saveCartTols(remaining)
}



export { addTols, getStoreCart, removeFromLs }