import {useContext} from 'react';
import {CountryContext} from '../../context/CountryContext';
import "./Result.css";

const Result = () => {
    // Context
    const {countryList, selectCountry} = useContext(CountryContext);
    
    return (
        <div>
            {countryList && countryList.map((country, index) => {
                return(
                    <ul 
                        key={index+Math.random()}
                        onClick={() => selectCountry(country)}
                        className="countryListItem"
                    >
                        {country.name}
                    </ul>
                )
            })}
        </div>
    );
}
 
export default Result;