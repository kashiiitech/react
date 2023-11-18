import { useState } from "react";


function Card({id, image, info, price, name,removeTour, addTour, isClickMeActive}) {

    const [readmore, setReadmore] = useState(false);

    const description =  readmore ? info: `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">

            {/* Image tag */}
            <img src={image} className="image"></img>

            <div className="tour-info">
                {/* Price & name */}
                <div className="tour-details">
                    <h4 className="tour-price">Rs {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                {/* Description */}
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less`: `Read more`}
                    </span>
                </div>

            </div>
            

            <button onClick={() => removeTour(id)} className="btn-red">
                    Not Interested
            </button>

            {/* Conditionally render the Interested button */}
            {!isClickMeActive && (
                <button onClick={() => addTour(id)} className="btn-red">
                    Interested
                </button>
            )}

        </div>
    );


}

export default Card;