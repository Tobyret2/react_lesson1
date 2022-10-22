import React, {useState} from "react";


function App() {
    const [category, setCategory] = useState([{name: 'Нажми кнопку для получения категорий'}])
    const [servises, setServises] = useState([{title: 'Нажми кнопку для получения сервисов'}])
    const [servis_text, setServis_text] = useState('')
    const [servis_title, setServis_title] = useState({title:''})
    console.log(servis_title)
    function get_category() {
        fetch('http://127.0.0.1:8000/api/v1/category/')
            .then(response => response.json())
            .then(category => {
                console.log(category)
                setCategory(category)
            })
    }

    function get_serv() {
        fetch('http://127.0.0.1:8000/api/v1/services/')
            .then(response => response.json())
            .then(serv => {
                console.log(serv)
                setServises(serv)
            })

    }
    
    function set_input_value_for_servise_text (e) {
        setServis_text(e.target.value)
    }
    function get_servis_on_text() {
        fetch(`http://127.0.0.1:8000/api/v1/services/${servis_text}`)
            .then(response => response.json())
            .then(result => setServis_title(result))
    }
    return (

        <div className="App">
            <div>
                <h1>Hello Max</h1>

            </div>
        </div>
    );
}

export default App;