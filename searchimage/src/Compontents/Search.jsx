import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  let API_KEY = "uGj5mxmIILPu8Aci9nVMCYDvbU_NEM177EFymc_oZMo";
  function handleSearch(e) {
    setSearch(e.target.value);
  }
function getData(){
  myfun()
}

  const myfun = async () => {
    const response = await fetch(
      `https:/api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`
    );
    const data = await response.json();
    setData(data.results);
  };
  
  console.log(data);
  return (
    <div className="container">
      <h2 className="text"> Image Search App </h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Search here...."
          onChange={(e) => handleSearch(e)}
        />
        <button onClick={() => getData()}>Search</button>
      </div>
      <div className="images">
        {data.map((currVal, index) => {
          // console.log(currVal.urls.full);
          return(
            <img src={currVal.urls.full}/>
          )
        })}
      </div>
    </div>
  );
};

export default Search;
