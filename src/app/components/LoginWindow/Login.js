"use client"
import { useState, } from 'react'
import styles from './login.module.css'
import { useRouter } from "next/navigation"

const Login = () => {
    let { push } = useRouter()
    const [isSingUp, setIsSignUp] = useState(false) // used for login checking and acording to that navbar is condinally rendered
    const [userName, setUserName] = useState('') // used to store username
    const [password, setPassword] = useState('') // used to store password

    const getUserName = (e) =>{
        setUserName(e.target.value)

    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const checkLogin = (path) =>{
        if(userName != '' && password != '' && userName.toUpperCase() == password.toUpperCase()){ // is username and password both are equal then login success
            setIsSignUp(true)
            setUserName('')
            setPassword('')
            push(path)

        }else{
            alert("enter user name and password  same")
        }
    }
    
  return<section className={styles.wrapper}>
            <div className={styles.loginWrapper}>
                <div className={styles.loginHeading}>
                    <p>Welcome to Dashboard,Login</p>        
                </div>
                <div className={styles.loginContent}>
                    <label 
                    className={styles.loginLabel}
                    htmlFor="username"
                    >
                        Username
                    </label><br/>
                    <input 
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e)=> getUserName(e)}
                    required
                    /><br/>
                    <label className={styles.loginLabel}
                    htmlFor="password"
                    >
                        Password
                    </label><br/>
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={(e)=> getPassword(e)}
                    /><br/>
                    <button 
                    className={styles.loginBtn}
                    onClick={()=>checkLogin('/Dashboard')}
                    >
                        Login
                    </button>
                </div>


            </div>
        </section>
  
}

export default Login