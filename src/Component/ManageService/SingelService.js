
import React from 'react';
import { Button, Card } from 'react-bootstrap';


const SingelService = ({serviceP}) => {
    const {_id,nameProduct,image,price,discountPrice }  = serviceP;

  const handelDelete = id => {
       const url = `https://hidden-shore-94920.herokuapp.com/services/${id}`
       fetch(url , {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
          alert('Deleted Successfully')
           console.log(data);
       })

    }
    return (
        
     <div className=' col-lg-3  col-md-6  col-sm-12 my-2  p-5' >
       <div >
       <Card className='' style={{ width: '18rem' ,}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title className='text-center text-dark'>{nameProduct}</Card.Title>
            <Card.Title className="text-center  text-black fs-3 " style={{color:'#000050'}}> Visit Price <del>${price}</del></Card.Title>
            <Card.Title className="text-center fs-3 " style={{color:'#000050'}}> ${discountPrice}</Card.Title>
            <Button onClick={()=> handelDelete(_id)}  className="mx-auto d-block" variant="primary bg-primary"> Delete Service</Button>
           
        </Card.Body>
        </Card>
      
       </div>
 </div>
        
    );
};

export default SingelService;