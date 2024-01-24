import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Adopt = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/viewPost")
      .then((info) => setInfo(info.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="adopt">
      <h1
        style={{ textAlign: "center", marginTop: "20px", color: "orangered" }}
      >
        Meet your furry friends!
      </h1>
      <div className="AllPets">
        {info.map((post) => {
          return (
              <div className="pets">
                <img
                  style={{
                    marginTop: "30px",
                    marginLeft: "60px",
                    borderRadius: "5%",
                    border:'3px solid grey'
                  }}
                  src={`http://localhost:3000/Images/${post.photo}`}
                />
                <div className="petDetails">
                  <h2 style={{color:'orangered'}}>{post.petName}</h2>
                </div>
                <div className="petDetails">
                  <p>Age: {post.age}</p>
                  <p><i class="bi bi-gender-male"></i> {post.sex}</p>
                </div>
                <div className="petDetails">
                  <p>Pet: {post.petType}</p>
                  <p>Color: {post.petColor}</p>
                </div>
                <div className="petDetails">
                  <p>Breed: {post.petBreed}</p>
                  <p><i class="bi bi-geo-alt"></i> {post.city}</p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Link style={{textDecoration:'none', border:'1px solid orange',padding:'10px',color:'white',backgroundColor:'orangered',borderRadius:'10px'}} to={`/adoptme/${post._id}`}>Adopt me</Link>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adopt;
