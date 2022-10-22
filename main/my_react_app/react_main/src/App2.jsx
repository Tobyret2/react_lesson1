import './slyle/App.css';
import React, {useState} from "react";
import PostItem from "./components/PostItem"
import PostList from "./components/PostList";


function App2() {
    // const [posts , setPosts] = useState([
    //     {id:1,title:'JS',body:'Descriptions'},
    //     {id:2,title:'JS 2',body:'Descriptions'},
    //     {id:3,title:'JS 3',body:'Descriptions'},
    // ])
    const [country,setCountry] = useState({id:0,name:'',family_name:'',age:0,})
    const [json , setJson] = useState([])
    const get_country = (e) => {
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/api/v1/get_person/${country}`)
            .then(response => response.json())
            .then(result => setJson(result))
        setCountry('')
    }
    console.log(json)
    return (

        <div className="App">
            <form>
                <input
                    type="text"
                    placeholder="Введите страну"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <button onClick={get_country}>OK</button>
            </form>
            <PostList posts = {json} country = {country}/>

        </div>

    );
}

export default App2;