import {useState, createContext} from 'react';

export const CountryContext = createContext();

const CountryContextProvider = (props) => {
    // States
    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    // API Endpoint
    const url = `https://restcountries.eu/rest/v2/capital/`;
    
    // Function to search API
    const searchCountry = async (capital) => {
        if(capital) {
            fetch(
                `${url}${capital}`
            )
            .then(async (data) => {
                const countryListData = await data.json();
                if(Array.isArray(countryListData)) {
                    setCountryList(countryListData);
                }
                else {
                    setCountryList([]);
                }
            })
            .catch((error) => {
                console.log(`Error ${error}`)
            })
        }
    }

    // Function to add info to selected country
    const selectCountry = (info) => {
        setSelectedCountry(info);
    }

    return(
        <CountryContext.Provider
            value={{
                countryList,
                selectedCountry,
                searchCountry,
                selectCountry,
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;