import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Data } from '../Data';
import './Home.css'

function Home() {
  const [search, setSearch] = useState('');
  
  const filterData = Data.filter((item) => (
    item.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(search.toLowerCase())
    )
  ));

  return (
    <div className="home">
          <div className="back">
              <div className='appul'></div>
              <div className="appsecmain">
                <h1>Welcome to Reciepy</h1>
              </div>
          </div>
          <div className="backone">
            <div className="backonedes">
                <h4>explore food.</h4>
            </div>
            <div className="backonein">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
          </div>
      <div className="front">
      {filterData.map((item) => (
        <div className="frontclass" key={item.id}>
            <div className="separate">
              <h1><b><i>Title:  </i>{item.title}</b></h1><br/>
              <h3><i><b>Catagory:  </b></i>{item.category}</h3><br />
              <h4><i><b>Ingredients:  </b></i>{item.ingredients.join(" ,")}</h4><br />
              <Link to='/reciepe'>Details</Link>
            </div>
            <div className="separate-sec">
                <img src={item.image} alt={item.description} />
            </div>
            {/* <li><i><b>Instructions:  </b></i>{item.instructions}</li><br /> */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Home;
