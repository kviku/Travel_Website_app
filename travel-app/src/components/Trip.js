import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destination using google Map.</p>

            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the"
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malayasia"
                    text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the"
                />

                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the"
                />


            </div>
        </div>
    );
}
export default Trip;