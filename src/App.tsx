import React, { createContext, useContext, useState } from 'react';
import './App.css';
import BodyWrapper from './BodyWrapper/bodyWrapper';
import Navbar from './Navbar/navbar';


interface UserContextType {
  userName: string | null;
  getdata: boolean | null;
  setgetData: (data: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
  userName: null,
  getdata: true,
  setgetData: (value: boolean | null) => void 0,
});

function App() {
  const [userName, setUserName] = useState<string | null>(null);
  const [getdata, setGetData] = useState<boolean | null>(true);

  return (
    <div className="App">
      <UserContext.Provider value={{ userName, getdata, setgetData: setGetData }}>
        <Navbar setUserName={setUserName} />
        <BodyWrapper />
      </UserContext.Provider>
    </div>
  );
}

export default App;
