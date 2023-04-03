
import { React, useContext } from 'react';
import Header from './components/Header';
import UserProvider from './components/UserContext'
import Search from './components/Search'


function App() {
  return (
    <div>
      <Header />
      <UserProvider>
        <Search />
      </UserProvider>
    </div>
  );
}

export default App;
