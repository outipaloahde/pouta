import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';

const api_key = '83b052fb508a3261ecd7a87c4620dd75';

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    desc: undefined,
    img: undefined,
    error: undefined
  }

   getWeather = async (e) => {
     e.preventDefault();
     const city = e.target.elements.city.value;
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
     const data = await api_call.json();
     console.log(data);
     if (city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        desc: data.weather[0].description,
        img: data.weather[0].icon,
        error: undefined
      })
     } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        desc: undefined,
        img: undefined,
        error: 'Please enter a value'
      })
     }
   }
   
   saveCity = (e) => {
     e.preventDefault();
     const city = this.state.city;
     console.log('called save')
     localStorage.setItem(city, city)
     console.log(localStorage) 
   }

   removeCity = (e) => {
     e.preventDefault();
     const city = this.state.city
     console.log('called remove')
     localStorage.removeItem(city);
     console.log(localStorage)
   }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form getWeather={this.getWeather}/>
        <Weather
        removeCity={this.removeCity}
        saveCity={this.saveCity}
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        desc={this.state.desc}
        img={this.state.img}
        error={this.state.error}
        />
      </div>
    );
    }
}

export default App;
