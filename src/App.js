import React, { useEffect } from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EmailBody from './components/EmailBody/EmailBody';
import { ComposeMail } from './components/ComposeMail/ComposeMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsComposeMailOpen } from './features/composeMailSlice';
import EmailDetails from './pages/EmailDetails/EmailDetails';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { selectUser, signin, signout } from './features/userSlice';
import { auth } from './app/firebase';

function App() {

  const dispatch = useDispatch()

  const isComposeMsgOpen = useSelector(selectIsComposeMailOpen)

  const user = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(signin({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email
        }))
      }else{
        dispatch(signout())
      }
    })
  },[dispatch])

  return (
    <>
    {
      user !== null ? (
        <div className="App">
          <Header/>

          <div className='app__body'>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<EmailBody/>}/>
              <Route path='/mail' element={<EmailDetails/>}/>
            </Routes>
          </div>

          {
            isComposeMsgOpen && <ComposeMail/>
          }

        </div>
    ) : <Login/> }
    </>
  );
}

export default App;
