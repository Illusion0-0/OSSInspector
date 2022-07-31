import React from 'react';
// import Navbar from './Navbar';
import Results from './Results';
import SearchUser from './SearchUser';
// import ResultsExplainer from './ResultsExplainer';
// import { useLogin } from '../hooks/useLogin';
// import { useLogout } from '../hooks/useLogout';
// import { AuthContext } from '../contexts/AuthContext';

// import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Repos from '../components/Repos';
import '../styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <Inspect /> */}
      <SearchUser />
      <Results  />
      {/* {user ? (
        <div className="content">
          <ProfileCard user={user} />
          <Repos user={user} />
          <button className="btny" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btny login-btn" onClick={login}>
          Login With Github
        </button>
      )} */}
      <Footer />
    </div>
  );
  // ) : (
  //   <div className="App">
  //     <h1>Loading...</h1>
  //   </div>
  // );
};

export default App;
