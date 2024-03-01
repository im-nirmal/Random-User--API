import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function RandomUser() {
    const [allUsers,setAllUsers] = useState([])
    const [data,setData] = useState("")

    const fetchAllUsers = async ()=>{
        try{
            const response = await axios.get(" https://dummyjson.com/users")
            setAllUsers(response.data.users)
            //random user
            setData(getRandomUser(response.data.users))
        }catch(err){
            console.log("Error",err);
        }
    }


    const getRandomUser = (e) =>{
        const randomIndex = Math.floor(Math.random()*e.length)
        return e[randomIndex]
    }

    const handleRefresh = () =>{
        setData(getRandomUser(allUsers))
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: "1000px" }} className="bg-warning p-5 rounded mt-5">
        
        

           { data && (
            <>
            <Row>
            <Col>
            <div  className="ms-5">
                <img src={data.image} alt="" />
                <h1>{data.firstName}</h1>
                <h4 className="ms-5">{data.gender}</h4>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-5">
                  <div>
                    <p className="fw-bolder text-light">Birth Date</p>
                    <h6>{data.birthDate}</h6>
                  </div>
                  <div className="mt-5">
                    <p className="fw-bolder text-light">Weight</p>
                    <h6>{data.weight}</h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-5 ms1-1">
                  <div>
                    <p className="fw-bolder text-light">Age</p>
                    <h6>{data.age}</h6>
                  </div>
                  <div className="mt-5">
                    <p className="fw-bolder text-light">Height</p>
                    <h6>{data.height}</h6>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={handleRefresh}
                    className="ms-5 mt-5"
                    variant="success"
                  >
                    REFRESH
                  </Button>{" "}
                </div>
              </div>
            </Col>
             
            
            <Col>
            <div className="mb-5">
                <h4>Home Address</h4>
                <h6>{data.address.address}</h6>
              </div>
              <div className="mt-5 mb-5">
                <h4>Mobile Phone</h4>
                <h6>{data.phone}</h6>
              </div>
              <div className="mt-5 mb-5">
                <h4>Company</h4>
                <h6>{data.company.address.address}</h6>
              </div>
              <div className="mt-5 mb-5">
                <h4>Job Title</h4>
                <h6>{data.company.department}</h6>
              </div>
              <div className="mt-5 mb-5">
                <h4>Email</h4>
                <h6>{data.email}</h6>
              </div>
            </Col>
              
            
          </Row>
        </>
           )
            
            }
        
                
        
    
        
      </div>
    </div>
  );
}

export default RandomUser;
