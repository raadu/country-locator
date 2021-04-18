import {useContext} from 'react';
import {CountryContext} from '../../context/CountryContext';

const Result = () => {
    // Context
    const {countryList} = useContext(CountryContext);
    
    return (
        <div>
            {countryList && countryList.map((country, index) => {
                return(
                    <ul key={index+Math.random()}>
                        {country.name}
                    </ul>
                )
            })}
        </div>
    );
}
 
export default Result;