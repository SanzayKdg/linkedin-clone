import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feeds from "./components/Feeds";
import { auth } from "./components/firebase";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
      auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
          // user is logged in
          dispatch(login({
            email : userAuth.email,
            uid : userAuth.uid,
            displayName : userAuth.displayName,
            photoUrl : userAuth.photoURL
          }));
        }else{
          // iuser is logged out
          dispatch(logout());

        }
      })
  }, [])
  
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feeds />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
