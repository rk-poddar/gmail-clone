import React from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EmailBody from './components/EmailBody/EmailBody';
import { ComposeMail } from './components/ComposeMail/ComposeMail';
import { useSelector } from 'react-redux';
import { selectIsComposeMailOpen } from './features/composeMailSlice';

function App() {
  const isComposeMsgOpen = useSelector(selectIsComposeMailOpen)

  return (
    <div className="App">
      <Header/>

      <div className='app__body'>
        <Sidebar/>
        <EmailBody/>
      </div>

      {
        isComposeMsgOpen && <ComposeMail/>
      }

    </div>
  );
}

export default App;
