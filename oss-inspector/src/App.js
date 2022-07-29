import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Repos from "./components/Repos";

function App() {
  const { login, isPending } = useLogin();
  const { logout } = useLogout();
  const { user, authIsReady } = useContext(AuthContext);
  // console.log(user);
  
  return authIsReady ? (
    <div className="App">
      <Header />
      {user ? (
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
      )}
      <Footer />
    </div>
  ) : (
    <div className="App">
      <h1>Loading...</h1>
    </div>
    );
}

export default App;
