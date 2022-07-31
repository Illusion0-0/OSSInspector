import React from 'react';
// import Navbar from './Navbar';
import Results from './Results';
import SearchUser from './SearchUser';
// import ResultsExplainer from './ResultsExplainer';
// import { useLogin } from '../hooks/useLogin';
// import { useLogout } from '../hooks/useLogout';
// import { AuthContext } from '../contexts/AuthContext';
import { RatingContextProvider } from '../contexts/RatingContext';

// import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Repos from '../components/Repos';
import '../styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <RatingContextProvider>
        <Header />
        {/* <Inspect /> */}
        <SearchUser />
        <Results />
        {/* {user ? (
=======
      <Header />
      {/* <Inspect /> */}
      <SearchUser />
      <Results  />
      {/* {user ? (
>>>>>>> 3b443651d86d430d65a51eaf8f90f277b2cbf1bf
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
      </RatingContextProvider>
    </div>
  );
  // ) : (
  //   <div className="App">
  //     <h1>Loading...</h1>
  //   </div>
  // );
};

export default App;
