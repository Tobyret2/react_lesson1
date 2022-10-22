import React, {useEffect, useState} from 'react';



const ViewServices = () =>{
    const [servises, setServises] = useState([{title: '',name:'',slug:'',price:''}])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/services/')
            .then(response => response.json())
            .then(data => setServises(data))
    }, [])
    return (

        <div>
                <h2>Все сервисы</h2>
                <main style={{display:'flex',width:'80%',justifyContent:'flex-start',background:'gray',padding:'20px'}}>
                    {servises.map(item=><div style={{
                    height:'150px',
                    width:'150px',
                    border:"1px solid red",
                    background:"goldenrod",
                    margin:"20px"}} className='serv' key = {item.title}>
                    <p> {item.title} </p>
                    <p> {item.price} </p>
                    </div>)}
                    </main>
        </div>
    );
};

export default ViewServices;