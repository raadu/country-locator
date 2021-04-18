import {useState, createContext} from 'react';

export const CountryContext = createContext();

const CountryContextProvider = (props) => {
    // States
    const [countryList, setCountryList] = useState([]);

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
                setCountryList(countryListData);
            })
            .catch((error) => {
                console.log(`Error ${error}`)
            })
        }
    }

    return(
        <CountryContext.Provider
            value={{
                countryList, 
                searchCountry
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;