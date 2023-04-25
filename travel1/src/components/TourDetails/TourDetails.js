import React from "react";
import { useParams } from "react-router-dom";

function TourDetails(props) {
     const params = useParams();
     const cityId = params.cityId;
    return (
        <>
        <h1>{props.tour.info}. Destination to {props.tour.name} cost {props.tour.price} </h1>
        </>
 
    );
}

export default TourDetails;
