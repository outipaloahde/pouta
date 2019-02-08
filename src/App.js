import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SavedCities from "./components/SavedCities";
import api_key from "./api_key";
import { Container, Row, Col } from "react-bootstrap";


class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    desc: undefined,
    img: undefined,
    error: undefined,
    myCities: []
  };

  getWeather = async e => {
    e.preventDefault();
    const key = api_key
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    const data = await api_call.json();
    if (city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        desc: data.weather[0].description,
        img: data.weather[0].icon,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        desc: undefined,
        img: undefined,
        error: "Please enter a value"
      });
    }
  };

  getSavedCity = async city => {
    console.log('city',city)
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.item}&appid=${api_key}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      desc: data.weather[0].description,
      img: data.weather[0].icon,
      error: undefined
    });
  };

  saveCity = e => {
    e.preventDefault();
    const city = this.state.city;
    localStorage.setItem(city, city);
  };

  removeCity = e => {
    e.preventDefault();
    const city = this.state.city;
    localStorage.removeItem(city);
    var cities = [...this.state.myCities];
    var index = cities.indexOf(city);
    if (index !== -1) {
      cities.splice(index, 1);
      this.setState({ myCities: cities });
    }
  };

  render() {
    return (
      <div className="App">
      <style>{'body { background-color: #263f66; margin-top: 25px; } '}</style>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Header />
              <SavedCities
                getSavedCity={this.getSavedCity}
                getWeather={this.getWeather}
                savedCities={this.savedCities}
                myCities={this.state.myCities}
                menuVisible={this.state.showMenu}
                showMenu={this.showMenu}
                closeMenu={this.closeMenu}
                dropdownMenu={this.dropdownMenu}
              />
              <Form getWeather={this.getWeather} />
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
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
