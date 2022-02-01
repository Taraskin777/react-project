import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>Hello {props.title}</h1>
}

const Text = () => {
    return (
        <>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ullam id laudantium neque, pariatur ipsum mollitia
                incidunt excepturi, recusandae rem maiores nostrum unde
                doloremque beatae eos repellat labore facilis. Tenetur.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ullam id laudantium neque, pariatur ipsum mollitia
                incidunt excepturi, recusandae rem maiores nostrum unde
                doloremque beatae eos repellat labore facilis. Tenetur.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" />
            <Header title="App.js" />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
