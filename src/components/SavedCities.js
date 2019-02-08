import React from "react";

class SavedCities extends React.Component {
  render() {
     
    return (
        <div>
           <p>pöö</p> 
        </div>
    );
  }
}
export default SavedCities;

/**
 * render() {
    const buttons = [];
    for (var i = 0; i < localStorage.length; i++) {
      buttons.push(localStorage.getItem(localStorage.key(i)));
      console.log("buttons", buttons);
    

    return (
      <div>
        <div>
          <button onClick={props.showMenu}>Kaupunkini</button>
          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              {buttons.map(item => (
                <button onClick={this.getSavedCity(item)}>{item}</button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  
 */
