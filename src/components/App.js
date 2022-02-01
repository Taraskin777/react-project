import React from "react";

const Header = (props) => {
   return (
       <h1>
           {props.id}. Hello {props.title}
       </h1>
   )
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
           <Header title="React" id={1} />
           <Header title="App.js" id={2} />
           <Text />
       </>
   )
}


export default App