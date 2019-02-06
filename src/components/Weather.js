import React from 'react';

const Weather = props => (
<div>
    {props.temp && props.desc && <p>{props.temp} °C {props.desc}</p> }
    {props.img && <img scr={`http://openweathermap.org/img/w/${props.img}.png`} alt='weather_image'/>}
    {props.city && props.country && <p> {props.city}, {props.country}</p>}
    {props.error && <p>{props.error}</p>}
</div>
);
export default Weather;