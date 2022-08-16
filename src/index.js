// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//     const FirstName = "Diane"
//     const LastName = "Pucci"

//     return (
//         <h1>Hello {`${FirstName} ${LastName}`}</h1>
//     )
// }

// ReactDOM.render(<App/>, document.getElementById("root"));





// // FUNCTION THAT TELLS USER CURRENT TIME
// import React from "react";
// import ReactDOM from "react-dom";

// function App () {
//     const date  = new Date()
 
    
//     return(
//         <h1>It is currently about {date.getHours()} : {date.getMinutes() }  </h1>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"));












// FUNCTION THAT TELLS WETHER ITS MORNING, AFTERNOON OR NIGHT
 


//  function App() {

//      const date = new Date(/*2022, 8, 12, 16*/);
//      const hours = date.getHours();
//      let timeOfDay

//          const styles = {
//         backgroundColor: "#1244FF",
//         fontFamily: "sans-serif",
//         fontSize: 90,
//      }

//      if (hours <12){
//          timeOfDay = "morning"
//          styles.color = '#9A2EFE';
//          styles.backgroundColor = "#086A87"
//      } else if (hours >= 12 && hours <17){
//          timeOfDay = "afternoon"
//          styles.color = '#287069';
//          styles.backgroundColor = '#E09717';
//      } else {
//          timeOfDay = "night"
//          styles.backgroundColor = '#0B173B'
//          styles.color = "#CEF6D8"
//      } 



//      return (
//          <h1 style={styles}>Good {timeOfDay}</h1>
//      )






// THAT WAS COOL EH? //  }



import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App"

  ReactDOM.render(<App/>, document.getElementById("root"));

