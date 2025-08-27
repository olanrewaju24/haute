import { Link } from "react-router-dom";
import './Journal.css';

const posts = [
  {
    id: 1,
    category: "Corporate",
    title: "Corporate",
    content: "Be the office Baddie",
    image: "https://i.pinimg.com/736x/59/e3/23/59e323de24776395410aefda1390605b.jpg",
    link: "/style/corporate"
  },
  {
        id: 2,
    category:"Street",
    title: " Streetwear",
    content: "Street vibes, no compromise. ",
    image:"https://i.pinimg.com/736x/91/9f/59/919f59f4ea04c68bf2c871283d1ed8cc.jpg",
    link:  "/style/Street"
  },
  {
    id: 3,
    category:"Casual",
    title: " Casual",
    content: "Effortless style, everyday vibes. ",
    image:"https://i.pinimg.com/736x/4c/02/23/4c0223187ff34bb99545665711740f99.jpg",
    link: "/style/Casual"
  },
  {
  id: 4,
    category: "Dinner",
    title: "Party/Evening wear",
    content: "Step in like a queen",
    image: "https://i.pinimg.com/736x/22/c2/97/22c2970210692a8cef6f99558ac9f6d5.jpg",
    link: "/style/Dinner"
  },
  
];

const Journal = () => {
  return (
    <div className='journal'>
    <h1 className='journal-heading'>Featured Category</h1>
    <div className="journal-container">
        
      {posts.map((item) => (
        <div key={item.id} className="journal-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <Link to={item.link}>
          <button className="view-more-btn">View More</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Journal;
