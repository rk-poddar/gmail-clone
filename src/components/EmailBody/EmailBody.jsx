import React, { useEffect, useState } from 'react'
import './EmailBody.css'
import EmailListSettings from './EmailListSettings'
import EmailType from './EmailType'
import EmailList from './EmailList'
import db from '../../app/firebase'

const EmailBody = () => {

  const [emails, setEmails] = useState([]);

  // fetch the data from firbase in desc-order.
  useEffect(() => {
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='emailbody'>
        <EmailListSettings/>
        <EmailType/>

        {
          emails.map(({id, data}) => {
            return (
              <EmailList key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString("en-US")}/>
            )
          })
        }
        
    </div>
  )
}

export default EmailBody