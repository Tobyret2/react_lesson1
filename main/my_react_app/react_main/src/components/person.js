import React from "react";
async function getJSON (){
    let resp = await fetch('http://127.0.0.1:8000/api/v1/get_person/');
    let JSONresp = await resp.json()
    return JSONresp
    // let i
    // let list = document.querySelector('.cls1')
    // for(i in JSONresp) {
    //     console.log(JSONresp[i])
    //     list.innerHTML += `<h1>${JSONresp[i].name}</h1>`
    //     console.log(list)
    // }
};

class ShowPerson extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ShowPerson