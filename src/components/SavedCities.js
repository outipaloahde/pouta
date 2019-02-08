import React from "react";

class SavedCities extends React.Component {
  state = {
    showMenu: false
  }

  showMenu = e => {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = e => {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };
  cityClickHandler = city => {
    const c = city;
    console.log(c)
    this.props.getSavedCity(c);
  };

  render() {
    const buttons = [];
    for (var i = 0; i < localStorage.length; i++) {
      buttons.push(localStorage.getItem(localStorage.key(i)));
    }
    
    return (
       <div>
         <div>
           <button onClick={this.showMenu}>Kaupunkini</button>
           {this.state.showMenu ? (
             <div
             className='menu'
             ref={element => {
               this.dropdownMenu = element;
             }}
              >
              {buttons.map(item => (
                <button onClick={() => this.cityClickHandler(item)}>{item}</button>
              ))}
              </div>
           ) : null}
         </div>
       </div>
    );
  }
}
export default SavedCities;