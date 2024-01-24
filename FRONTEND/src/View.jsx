import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/adoptme/" + id)
      .then((result) => setInfo(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="single_pet">
    <div className="viewPet">
      <h3 style={{ marginTop: "20px",textAlign:'center',color:'orange'}}>Adopt Your Favourite Pet</h3>
      <img
        src={`http://localhost:3000/Images/${info.photo}`}
      />
      <div className="petDetailsView">
        <h2 style={{color:'orangered'}}>{info.petName}</h2>
      </div>
      <div className="petDetailsView">
        <p>Age: {info.age}</p>
        <p><i class="bi bi-gender-male"></i> {info.sex}</p>
      </div>
      <div className="petDetailsView">
        <p>Pet: {info.petType}</p>
        <p>Color: {info.petColor}</p>
      </div>
      <div className="petDetailsView">
        <p>Breed: {info.petBreed}</p>
        <p><i class="bi bi-geo-alt"></i> {info.city}</p>
      </div>
    </div>
    <div className="info">
    <div>
        <h5 style={{color:'orange'}}>Want to adopt? Kindly check the contact details given below.</h5>
        <p>Owner: {info.name}</p>
        <p>Email: {info.email}</p>
        <p>Address: {info.city},{info.state},{info.country}</p>
        <p>Contact Number: {info.contactNumber}</p>
        </div>
        <div>
            <Link to='/adopt'>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default View;
