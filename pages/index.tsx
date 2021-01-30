import Head from 'next/head'
import style from './styles.module.css'

export default function Home() {
  function registerClick() {
    // alert("login")
    let x = document.getElementById("login")
    let b1 = document.getElementById("b-1")
    let b2 = document.getElementById("b-2")
    let y = document.getElementById("register")
    let z = document.getElementById("btn")
    x.style.left = "-400px"
    b1.style.color = "#6c3a85"
    b2.style.color = "#fff"
    y.style.left = "50px"
    z.style.left = "110px"
  }
  function loginClick() {
    // alert("register")
    let x = document.getElementById("login")
    let b1 = document.getElementById("b-1")
    let b2 = document.getElementById("b-2")
    let y = document.getElementById("register")
    let z = document.getElementById("btn")
    b1.style.color = "#fff"
    b2.style.color = "#6c3a85"
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0px"

  }
  return (
    <div className={style.hero}>
      <div className={style.form_box}>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHSiClRBBWi8Wp9IvP0YpFRi0jIHiC0nKOQ&usqp=CAU"></img> */}
        <div className={style.button} >
          <div className={style.btn} id="btn"></div>
          <button type="button" id="b-1" className={style.toggle} onClick={() => loginClick()}>Sign In</button>
          <button type="button" id="b-2" style={{ color: "#6c3a85" }} className={style.toggle} onClick={() => registerClick()}>Sign Up</button>
        </div>
        <form id="login" className={style.input_group_login}>
          <input type="email" className={style.input_field} placeholder="User id..." />
          <input type="password" className={style.input_field} placeholder="Password..." />
          <button type="submit" className={style.submit}>Login</button>
        </form>
        <form id="register" className={style.input_group_register}>
          <input type="text" className={style.input_field} placeholder="User id..." />
          <input type="email" className={style.input_field} placeholder="Email..." />
          <input type="text" className={style.input_field} placeholder="Password..." />
          <button type="submit" className={style.submit}>Register</button>
        </form>
      </div>
    </div>
  )
}
