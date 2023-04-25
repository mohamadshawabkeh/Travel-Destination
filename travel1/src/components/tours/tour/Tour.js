import '../tour/Tour.css'
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import TourDetails from '../../TourDetails/TourDetails';

function Tour(props) {
  const [open, setOpen] = useState(false);
    return (
      <>
      {props.arrayData.map((tour) => (
        <div key={tour.id} className="tour">
          
          <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={tour.image} />
         <Card.Body>
           <Card.Title>{tour.name}</Card.Title>
           <Card.Text>
             Some 
           </Card.Text>
           <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See more
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {tour.info}
        </div>
      </Collapse>
      
           <Button variant="primary">More Details</Button>
         </Card.Body>
       </Card>
       
       
        </div>
      ))}
      </>

    );

}

export default Tour;
