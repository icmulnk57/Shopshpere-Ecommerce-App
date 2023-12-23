import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { BASE_URL } from "../../url";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(BASE_URL+
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
     <form className="d-flex custom-search-form" role="search" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="search"
          placeholder="Search for products"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-yellow" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
    </div>
  );
};

export default SearchInput;
