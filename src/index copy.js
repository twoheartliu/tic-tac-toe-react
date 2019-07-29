import React, {useState} from "react";
import ReactDOM from "react-dom";
const Header = (
  <div>header</div>
)
const Header2 = function(props) {
  return (
    <div>header2 {props.name}</div>
  )
}
const Footer = (
  <div>footer</div>
)
const Footer2 = function() {
  const [n, setN] = useState(0);
  return (
    <div>
      {n}
      <button onClick={() => {
        setN(n + 1)
      }}></button>
    </div>
  )
}
const div = (
  <div>
    {Header}
    {/* {header2({name: 'jack'})} */}
    <Header2 name="frank"/>
    <p>
      <span>hello</span>
    </p>
    {Footer}
    <Footer2 />
  </div>
)

ReactDOM.render(div, document.getElementById('root'))