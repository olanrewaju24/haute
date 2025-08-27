import React from "react";
import "./Journal2.css" ;
import Journal from "./Journal";

const posts = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/5f/91/77/5f9177a3bc19456b8a51b2098e463248.jpg",
   
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    
  },
  {
    id: 3,
    image:"https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
  },
  {
    id: 4,
    image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
   
  },
  
];

const Journal2 = () => {
    return (
        <div className="flexbox">
             <h1 className='journal-heading'>Best sellers/ New Arrivals</h1>
    <div className="flex-container">
      {posts.map((item) => (
        <div key={item.id} className="journal-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <button className="view-details-btn">View Details</button>
        </div>
      ))}
    </div>

        </div>

    );
};

export default Journal2;