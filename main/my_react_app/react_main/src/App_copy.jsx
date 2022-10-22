import React, {useState, useEffect} from "react";


function App() {
    const [category, setCategory] = useState([{name: ''}])
    const [servises, setServises] = useState([{title: ''}])
    const [servises_sort, setServises_sort] = useState([{title: ''}])
    const [service_view, setService_view] = useState({title: ''})



        useEffect(() => {
            fetch('http://127.0.0.1:8000/api/v1/services/')
                .then(response => response.json())
                .then(data => setServises(data))
        }, [])
        useEffect(() => {
            fetch('http://127.0.0.1:8000/api/v1/category/')
                .then(response => response.json())
                .then(data => setCategory(data))
        }, [])

    function default_service_sort() {
        setServises_sort([{title: ''}])
        console.log('Нажал все сервисы')
    }


     function sortServices(e) {
        let data_sorted = []
        for (let i of servises) {
            if (i.category.name === e.target.id) {
                data_sorted.push(i)
            } setServises_sort(data_sorted) }}

    function get_full_service(e) {
        console.log(e.target.id)
        let data
        for (let i of servises) {
            if (i.slug === e.target.id) {
                data = i
                setService_view(data)
            }}}

    function view_all_services(e) {
        setService_view({title: ''})
    }

    console.log(service_view)

      if (service_view.title === '') {
          if (servises_sort[0].title === '') {


        return (

            <div className="App">
                <div>
                    <nav>
                        <ul style={{display: 'flex', width: '80%', justifyContent: 'flex-start', background: 'green'}}>
                            {category.map(item => <li style={{margin: '15px', color: 'yellow'}} id={item.name}
                                                      key={item.name} onClick={sortServices}>{item.name} </li>)}
                        </ul>
                    </nav>
                    <h2 onClick={default_service_sort}>Все сервисы</h2>
                    <main style={{
                        display: 'flex',
                        width: '80%',
                        justifyContent: 'flex-start',
                        background: 'gray',
                        padding: '20px'
                    }}>
                        {servises.map(item => <div style={{
                            height: '150px',
                            width: '150px',
                            border: "1px solid red",
                            background: "goldenrod",
                            margin: "20px"
                        }} key={item.title}>
                            <p onClick={get_full_service} id={item.slug}> {item.title} </p>
                            {/*<p> {item.price} </p>*/}
                            {/*<p> {item.slug} </p>*/}
                        </div>)}
                    </main>
                </div>
            </div>

        );
    } else ;

        return (
            <div className="App">
                <div>
                    <nav>
                        <ul style={{
                            display: 'flex',
                            width: '80%',
                            justifyContent: 'flex-start',
                            background: 'green'}}>
                            {category.map(item =>
                                <li style={{
                                margin: '15px',
                                color: 'yellow'}}
                                id={item.name}
                                key={item.name}
                                onClick={sortServices}>
                                {item.name}
                            </li>)}
                        </ul>
                    </nav>
                    <h2 onClick={default_service_sort}>Все сервисы</h2>
                    <main style={{
                        display: 'flex',
                        width: '80%',
                        justifyContent: 'flex-start',
                        background: 'gray',
                        padding: '20px'
                    }}>
                        {servises_sort.map(item =>
                            <div
                                style={{
                                    height: '150px',
                                    width: '150px',
                                    border: "1px solid red",
                                    background: "goldenrod",
                                    margin: "20px"
                                }}
                                key={item.title}>
                                <p onClick={get_full_service} id={item.slug}> {item.title} </p>
                            </div>)}
                    </main>
                </div>
            </div>

        );
    } else ;
    return (

        <div className="App">
            <div>
                <nav>
                    <ul style={{display: 'flex', width: '80%', justifyContent: 'flex-start', background: 'green'}}>
                        {category.map(item => <li style={{margin: '15px', color: 'yellow'}} id={item.name}
                                                  key={item.name} onClick={sortServices}>{item.name} </li>)}
                    </ul>
                </nav>
                <h2 onClick={default_service_sort}>Все сервисы</h2>
                <main style={{
                    display: 'flex',
                    width: '80%',
                    justifyContent: 'flex-start',
                    background: 'gray',
                    padding: '20px'
                }}>
                    <div
                        style={{
                            height: '150px',
                            width: '150px',
                            border: "1px solid red",
                            background: "goldenrod",
                            margin: "20px"
                        }}>
                        <p> {service_view.title} </p>
                        <p> {service_view.slug} </p>
                        <p> {service_view.price} </p>
                    </div>
                    <div
                        onClick={view_all_services}
                        style={{
                            height: '150px',
                            width: '150px',
                            border: "1px solid red",
                            background: "goldenrod",
                            margin: "20px"
                        }}> Назад </div>
        </main>
</div>
</div>

)



}
export default App;