import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchEmployee.css";
import { FaSearch } from "react-icons/fa";
import { loadingUrl } from "../../App";

const SearchEmployee = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://empadmin.hola9.com/account/loginprofile/"
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const apiData = await response.json();
        setData(apiData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchName.trim() !== "") {
      const filteredSuggestions = data
        .filter((item) =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        )
        .map((item) => item);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchName, data]);

  const handleSelect = useCallback(
    (name) => {
      navigate(`/empdash/${name}`);
      setSearchName("");
      setShowSuggestions(false);
    },
    [navigate]
  );

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } 
  };

  return (
      <div>
        <span className="SearchEmployee-input-span">
          <FaSearch className="SearchEmployee-icon" />
          <input
            type="search"
            className="SearchEmployee-input border"
            placeholder={loading === true ? 'Loading...' : "Search For Employees"}
            value={suggestions[selectedSuggestionIndex] ? searchName : suggestions[selectedSuggestionIndex]}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </span>
        {showSuggestions && suggestions.length > 0 ? (
          <div className="search-dropdown scroll-bar">
            {suggestions.map((item, index) => (
              <div className="emp-dropdown content-hover" key={index} onClick={() => handleSelect(item.name)}>
                <img src={item.image} width={'100%'} alt="Employee" />
                <div>
                  <h5>{item.name}</h5>
                  <i>{item.userid}</i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {loading === true && (
              <img src={loadingUrl} width={'100%'} alt="Loading..." />
            )}
          </div>
        )}
      </div>
  );
};

export default SearchEmployee;
