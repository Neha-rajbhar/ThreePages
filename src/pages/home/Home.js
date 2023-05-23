import React, { useState } from 'react'
import Button from '../../components/button/Button'
import { useRecoilValue } from 'recoil'
import { submit } from '../atom/Atom'

function Home() {
  const data=useRecoilValue(submit);


  let [user,setUser]=useState(JSON.parse(localStorage.getItem("userContact")) || [])

console.log(user,"users");
    function handleButton(){
        alert("home")
    }
  return (
    <div>
      <h1>Welcome</h1>
      {}
      <Button onclick={handleButton} name="Clear Data"/>
    </div>
  )
}

export default Home
