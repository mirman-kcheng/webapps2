import React from "react";
import { render } from "react-dom";
// import Message from "./components/Message";
import Image from "./components/Image";
import Counter from "./components/Counter";
import NameField from "./components/NameField";

class App extends React.Component {

//   render() {
//     const message = [
//       "message 1",
//       "message 2",
//       "hey that's totally pretty solid"
//     ];
//
//     {message.map((m) => {
//         return (<Message message={m}/>)
//     })
//   }
// }

  render() {
      const L = "http://www.drodd.com/images14/l11.png";
    return (
      <div>
        <h1>Hello from React!</h1>

        <Image image={L}/>
        <Counter />
        <NameField />
      </div>
    )
  }


}

render(<App />, document.getElementById("root"));
