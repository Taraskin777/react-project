import React from "react"


const MainBlock = () => {
   return (
      <>
      <h2 className="text">Test text</h2>
      </>
   )
}


export const Main = () => {
   return (
      <div className="container">
           <MainBlock/>
           <div>Main</div>
       </div>
   )
}