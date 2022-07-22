import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from '../Modules/Form'
import Infolist from '../Modules/Infolist'
import axios from 'axios'
function App() {
  
  const [userInfo, setUserInfo]=useState([]);
  const [userSelected, setUserSelected] =useState(null);
  useEffect(()=>{
      axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res=>setUserInfo(res.data));
  },[])

  const getUsers=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=> setUserInfo(res.data));
  }
  const selectUser = user => {
    setUserSelected(user)
  }
  const deleteUser=id=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUsers());
  }
  const deselectUser=()=>setUserSelected(null)


  return (
    <div className="App">
      
      <Form getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} />
      <Infolist userInfo={userInfo} selectUser={selectUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
