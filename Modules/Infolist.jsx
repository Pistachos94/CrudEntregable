import React from 'react';
import axios from 'axios';
import App from '../src/App';
const Infolist = ({userInfo , selectUser, deleteUser}) => {
    return (
        <ul>
            <div className="listContGeneral">
                {userInfo.map(user => 
                    <li className="listCont disflex" key={user.id}>
                        <div className="userInfo disflex">
                            <span><b>{user.first_name} {user.last_name}</b></span>
                            <span>{user.email}</span>
                            <span><i className="fa-solid fa-cake-candles"></i> {user.birthday}</span>
                        </div>
                        <div className="options disflex">
                            <button onClick={()=>deleteUser(user.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                            <button onClick={()=>selectUser(user)}>
                                <i className="fa-solid fa-pencil"></i>
                            </button>
                        </div>
                    </li>
                )}
            </div>




        </ul>
    );
};

export default Infolist;