import SearchbarCSS from "../css/SearchbarCSS.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Searchbar = ({ placeholder, data }) => {
  const [filtered, setFiltered] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFiltered([]);
    } else {
      setFiltered(newFilter);
    }
  };
  const clearInput = () => {
    setFiltered([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="search-icon">
          {filtered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearbtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filtered.length != 0 && (
        <div className="results">
          {filtered.slice(0, 15).map((value, key) => {
            return (
              <a className="data-item" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
