import React,{useState} from 'react'
import {Data} from '../Data'
import './Reciepe.css'

function Reciepe() {
    const [search, setSearch] = useState('');
    const filterData = Data.filter((item) => (
        item.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(search.toLowerCase())
        )
      ));

    return (
      <div className="reciepe">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="reciepefront">
            {filterData.map((item) => (
            <div className="reciepefrontclass">
                <div className='left' key={item.id}>
                    <h1><b><i>Title:  </i>{item.title}</b></h1><br/>
                    <h4><i><b>Catagory:  </b></i>{item.category}</h4><br />
                    <h4><i><b>Ingredients:  </b></i>{item.ingredients.join(", ")}</h4><br />
                    <p><i><b>Instructions:  </b></i>{item.instructions}</p><br />
                </div>
            </div>
            ))}
        </div>
      </div>
    );
  }

export default Reciepe