
import './Watch.css'

const watch = ({watch}) => {
    const {device,steps,distance} = watch;
    return (
        <div>
            <h2>Watch: {device}</h2>
            <p>Steps: {steps}</p>
            <p>Distance: {distance}</p>
            
        </div>
    );
};

export default watch;