import PropTypes from 'prop-types';
import './bottels.css'

const Botels = ({botel,handleBottel}) => {
    const {name,img,ratings,price} = botel;


    return (
        <div className='bottels img'>
            <h2>Bottels here</h2>
            <p>Botel: {name}</p>
            <img src={img} alt="" />
           <p>rating: {ratings}</p>
           <p>Price: ${price}</p>
           <button onClick={() =>handleBottel(botel)}>Purchase</button>

            
        </div>
    );
};

Botels.propTypes ={
    botel: PropTypes.object.isRequired,
    handleBottel: PropTypes.func.isRequired
}


export default Botels;