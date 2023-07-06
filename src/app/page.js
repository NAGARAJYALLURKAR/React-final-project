"use client"
import styles from './page.module.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/LoginWindow/Login'
import Footer from './components/Footer/Footer'



export default function Home() {

  return (
    <main >
      <Navbar/>
      <Login/>
      <Footer/>
    </main>
  )
}
