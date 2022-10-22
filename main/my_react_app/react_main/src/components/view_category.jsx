import React, {useEffect, useState} from 'react';

const ViewCategory = () => {

    const [category, setCategory] = useState([{name: ''}])
    const [sort_services, setSort_services] = useState([{title: ''}])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/category/')
            .then(response => response.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <nav >
                <ul style={{
                    display:'flex',
                    width:'80%',
                    justifyContent:'flex-start',
                    background:'green'
                }}>
                    {category.map(item=>
                        <li onClick={sort_services}
                            style={{margin:'15px',color:'yellow'}}
                            id = {item.name }
                            key = {item.name} >{item.name}

                        </li>)}
                </ul>
                </nav>
        </div>
    );
};

export default ViewCategory;