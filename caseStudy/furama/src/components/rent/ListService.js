import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as rentService from "../../service/RentService"
export function ListRent() {
  const [rent, setRent] = useState([]);
   useEffect (()=>{
    getAllService();
  },[]);
  const getAllService = async()=>{
    let temp= await rentService.getAll();
    setRent(temp);
  }
  return(
    <div className="card-container">
        {
            rent.map((value,index)=>{
                if(value.type=="Villa"){
                return (
                    <Card style={{ width: '18rem' }} key={index}>
                      <Card.Img variant="top" src={value.imgURL} className="pic"/>
                      <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text>
                            {value.numberFloor}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  );
                }else if(value.type=="House")
                {
                    return (
                        <Card style={{ width: '18rem' }} key={index}>
                          <Card.Img variant="top" src={value.imgURL} className="pic"/>
                          <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                                {value.roomStandards}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      );
                }else
                {
                    return (
                        <Card style={{ width: '18rem' }} key={index}>
                          <Card.Img variant="top" src={value.imgURL} className="pic"/>
                          <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                                {value.freeService}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      );
                }
            })
        }
    </div>
  )
}
