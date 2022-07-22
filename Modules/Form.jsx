import {useState, useEffect} from 'react';
import App from '../src/App';
import axios from "axios";

const Form = ({getUsers, userSelected, deselectUser}) => {
    const [first_name, setName] =useState("");
    const [last_name, setLastname] =useState("");
    const [password, setPassword] =useState("");
    const [email, setEmail] =useState("");
    const [birthday, setBirthday] =useState("");
    useEffect(()=>{
        if(userSelected!=null){
            setName(userSelected.first_name)
            setLastname(userSelected.last_name)
            setPassword(userSelected.password)
            setEmail(userSelected.email)
            setBirthday(userSelected.birthday)
        }
    },[userSelected])

    const Submit = e =>{
        e.preventDefault();
        const newInfo={
            first_name,
            last_name,
            password,
            email,
            birthday,
        }
        console.log(newInfo);
        if(userSelected!=null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,newInfo)
            .then(()=>{
                getUsers()
                deselectUser();
            });
        }
        else{
            axios.post("https://users-crud1.herokuapp.com/users/", newInfo)
            .then(()=>getUsers());
        }
        reset();
    } 
    const reset =()=>{
        setName("")
        setLastname("")
        setPassword("")
        setEmail("")
        setBirthday("")
    }
    const clear=()=>{
        reset();
        deselectUser();
    }
    return (
        <div className='contFormCont'>
            <div className="formCont">
                <h1>New User</h1>
                <form onSubmit={Submit}>
                    <div className="inputCont disflex" >
                        <label className="iconCont">
                            <i className="fa-solid fa-user"></i>
                        </label>
                        <div className="namesCont disflex">
                            <input 
                                type="text"
                                id="name"
                                onChange={e=> setName(e.target.value)}
                                value={first_name}
                                >
                                
                            </input>
                            <input
                                type="text"
                                id="lastname"
                                onChange={e=> setLastname(e.target.value)}
                                value={last_name}
                            >
                                
                            </input>
                        </div>
                    </div>
                    <div className="inputCont disflex">
                        <label className="iconCont">
                            <i className="fa-solid fa-lock"></i>
                        </label>
                        <input 
                                type="password"
                                id="password"
                                onChange={e=> setPassword(e.target.value)}
                                value={password}
                            >
                        </input>
                    </div>
                    <div className="inputCont disflex">
                        <label className="iconCont">
                            <i className="fa-solid fa-envelope"></i>
                        </label>
                        <input 
                                type="email"
                                id="email"
                                onChange={e=>setEmail(e.target.value)}
                                value={email}
                            >
                        </input>
                    </div>
                    <div className="inputCont disflex">
                        <label className="iconCont">
                            <i className="fa-solid fa-cake-candles"></i>
                        </label>
                        <input 
                                type="date"
                                id="date"
                                onChange={e=>setBirthday(e.target.value)}
                                value={birthday}
                            >
                        </input>
                    </div>
                    <div className='submitsCont disflex'>
                        <button className="bCreate">{ userSelected!=null ? "Update"  :  "Create" }</button>
                        <button className="bCancel" type="button" onClick={clear}>{userSelected!=null ? "Cancel" : "Clear"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;        