import {useContext} from 'react';
import {CountryContext} from '../../context/CountryContext';

const CountryDetails = () => {
    // Context
    const {selectedCountry} = useContext(CountryContext);

    return (
        <div>
            <div>Country Details</div>
            <div>Country Name: {selectedCountry && selectedCountry.name}</div>
            <div>Capital: {selectedCountry && selectedCountry.capital}</div>
            <div>
                Languages:{" "} 
                    {selectedCountry && 
                        selectedCountry.languages.map((lang) => <span>{lang.name}</span>)}
            </div>
            <div>
                <span>Flag:</span>
                    <img 
                        src={selectedCountry && selectedCountry.flag}
                        alt="Country Flag" 
                        width="30" 
                        height="20"
                    />
            </div>
        </div>
    );
}
 
export default CountryDetails;