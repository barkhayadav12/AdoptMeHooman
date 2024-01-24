import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Golu from './Images/golu.jpeg'
import Minnie from './Images/minnie.jpeg'
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

{/*         static value for frontend */}

            <div className="pets">
                <img
                  style={{
                    marginTop: "30px",
                    marginLeft: "60px",
                    borderRadius: "5%",
                    border:'3px solid grey'
                  }}
                  src={Golu}
                />
                <div className="petDetails">
                  <h2 style={{color:'orangered'}}>Golu</h2>
                </div>
                <div className="petDetails">
                  <p>Age: 3</p>
                  <p><i class="bi bi-gender-male"></i> Male</p>
                </div>
                <div className="petDetails">
                  <p>Pet: Dog</p>
                  <p>Color: Brown</p>
                </div>
                <div className="petDetails">
                  <p>Breed: Local Breed</p>
                  <p><i class="bi bi-geo-alt"></i> Imphal</p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{textDecoration:'none', border:'1px solid orange',padding:'10px',color:'white',backgroundColor:'orangered',borderRadius:'10px'}}>Adopt me</button>
                </div>
              </div>
              <div className="pets">
                <img
                  style={{
                    marginTop: "30px",
                    marginLeft: "60px",
                    borderRadius: "5%",
                    border:'3px solid grey'
                  }}
                  src={Minnie}
                />
                <div className="petDetails">
                  <h2 style={{color:'orangered'}}>Minnie</h2>
                </div>
                <div className="petDetails">
                  <p>Age: 3</p>
                  <p><i class="bi bi-gender-male"></i> Male</p>
                </div>
                <div className="petDetails">
                  <p>Pet: Cat</p>
                  <p>Color: Orange</p>
                </div>
                <div className="petDetails">
                  <p>Breed: Local Breed</p>
                  <p><i class="bi bi-geo-alt"></i> Imphal</p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{textDecoration:'none', border:'1px solid orange',padding:'10px',color:'white',backgroundColor:'orangered',borderRadius:'10px'}}>Adopt me</button>
                </div>
              </div>
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
