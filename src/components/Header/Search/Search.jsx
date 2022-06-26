import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [item, setItem] = useState([]);
  const [searchResultsItem, setSearchResultsItem] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    await axios
      .get("http://localhost:8080/products/list/")
      .then((res) => {
        setItem(res.data.product);
        setSearchResultsItem(res.data.product);
        console.log(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("Lo buscado:  " + e.target.value);
    filterItem(e.target.value);
  };

  const filterItem = (searched) => {
    console.log(searchResultsItem);
    let resultSearched = searchResultsItem.filter((item) => {
      if (
        item.name.toLowerCase().includes(searched.toLowerCase()) ||
        item.description.toLowerCase().includes(searched.toLowerCase())
      ) {
        return item;
      }
    });
    setItem(resultSearched);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search-area">
      <form action="#" method="get">
        <input
          type="search"
          name="search"
          id="headerSearch"
          placeholder="Buscar..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>

      <div className="search-item">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default Search;
