import { useState, useContext } from "react";
import {CountryContext} from '../../context/CountryContext';

const Search = () => {
  // States
  const [capital, setCapital] = useState("");

  // Context
  const {searchCountry} = useContext(CountryContext);   

  const searchCapital = (e) => {
    if(e.key==="Enter") {
        // Call function from context API here
        searchCountry(capital);
        // console.log("Enter pressed");
    }
  }


  return (
    <div className="searchContainer">
        <div>Search With Capital</div>
        <input 
            type="text" 
            name="capital" 
            id="capital"
            value={capital}
            placeholder="Capital City"
            onChange={(e) => setCapital(e.target.value)}
            onKeyDown={(e) => searchCapital(e)}
        />
    </div>
  );
};

export default Search;
