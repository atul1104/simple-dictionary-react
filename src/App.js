import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ResultList from './components/ResultList';

//create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState('');

  const value = {
    inputValue: inputValue,
    setInputValue: setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div>
        <Header />
        <ResultList />
      </div>
    </InputContext.Provider>
  );
}

export default App;
