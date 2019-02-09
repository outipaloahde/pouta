import React from "react";

const btnStyle = {
  background: "#4a5972",
  color: "#b6b7ba",
  fontSize: "14px",
  borderRadius: "4px",
  margin: "2px",
  padding: "8px 7px",
  border: "0px",
  fontFamily: "Raleway"
};
const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="kaupunki" />
      <button className='btn' style={btnStyle}>Hae sää</button>
    </form>
  </div>
);
export default Form;
