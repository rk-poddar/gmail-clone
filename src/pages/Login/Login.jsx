import React from 'react'
import './Login.css'
import { auth, provider } from '../../app/firebase'
import { useDispatch } from 'react-redux'
import { signin } from '../../features/userSlice'

const Login = () => {

    const dispatch = useDispatch()

    const login = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(signin({
                displayName: user.displayName,
                photoUrl: user.photoURL,
                email: user.email
            }))
        }).catch(error => {
            alert(error)
        })
    }
    return (
        <div className='loginwrapper'>
            <div className='login'>
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="logo" />
            
            <button className='loginbtn' onClick={login}>Login With Gmail</button>

            </div> 
        </div>
    )
}

export default Login