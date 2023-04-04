import React from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EmailBody from './components/EmailBody/EmailBody';
import { ComposeMail } from './components/ComposeMail/ComposeMail';
import { useSelector } from 'react-redux';
import { selectIsComposeMailOpen } from './features/composeMailSlice';
import EmailDetails from './pages/EmailDetails/EmailDetails';
import { Route, Routes } from 'react-router-dom';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<EmailBody/>}>
//       <Route path="/mail" element={<EmailDetails/>} />
//     </Route>
//   )
// );

function App() {
  const isComposeMsgOpen = useSelector(selectIsComposeMailOpen)

  return (
    <div className="App">
      <Header/>

      <div className='app__body'>
        <Sidebar/>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path='/' element={<EmailBody/>}/>
          <Route path='/mail' element={<EmailDetails/>}/>
        </Routes>
      </div>

      {
        isComposeMsgOpen && <ComposeMail/>
      }

    </div>
  );
}

export default App;
