import Card from "./Card";

function Tours ({tours, removeTour, addTour, ClickMe, isClickMeActive}) {

    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Kashif!!</h2>
            </div>
            <button  onClick={ClickMe} className="btn-black">Interested</button>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} addTour={addTour} isClickMeActive={isClickMeActive}></Card>
                    }  )
                }
            </div>
        </div>
    );

}

export default Tours;