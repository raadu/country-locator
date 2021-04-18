import './App.css';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import CountryDetails from './components/CountryDetails/CountryDetails';
import CountryContextProvider from './context/CountryContext';

function App() {
  return (
    <div className="appContainer">
      <CountryContextProvider>
        <Search/>
        <Result/>
        <CountryDetails/>
      </CountryContextProvider>
    </div>
  );
}

export default App;
