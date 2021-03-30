import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {AuthContext} from '../../Auth';

const History = () => {
    const { currentUser } = useContext(AuthContext);
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/history", {
            auth:{
                username:currentUser['email'],
            }
        }).then(data=>data.data)
        .then(data=>{
            setData(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            {Data.map((x)=> <h1>{x['age']}</h1> )}
        </div>
    )
}

export default History;