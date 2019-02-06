import React from 'react';

const Weather = props => (
<div>
    {props.temp && props.desc && <p>{props.temp} °C {props.desc}</p> }
    {props.img && <img scr={`http://openweathermap.org/img/w/${props.img}.png`} alt='weather_image'/>}
    {props.city && props.country &&
    <p> {props.city}, {props.country}
        <button type="button" class="btn btn" aria-label="Left Align" onClick={props.saveCity}>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn" aria-label="Left Align" onClick={props.removeCity}>
            <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </button>
    </p>}
    {props.error && <p>{props.error}</p>}
    
</div>
);
export default Weather;