import React from 'react';

const btnStyle = {
    background: 'white',
    fontSize: '10px',
    borderRadius: '16px',
    fontFamily: 'Raleway'
  };

const txtStyle = {
    color: 'white',
    fontFamily: 'Raleway'
};


const Weather = props => (
<div style={txtStyle}>
    {props.temp && props.desc && <p>{props.temp} °C {props.desc}</p> }
    {props.img && <img scr={`http://openweathermap.org/img/w/${props.img}.png`} alt='weather_image'/>}
    {props.city && props.country 
    &&<p> {props.city}, {props.country} {"\n"} {"\n"}
        <button type="button" className="btn btn" aria-label="Left Align" onClick={props.saveCity} style={btnStyle}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn" aria-label="Left Align" onClick={props.removeCity} style={btnStyle}>
            <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </button>
    </p>}
    {props.error && <p>{props.error}</p>}
    
</div>
);
export default Weather;