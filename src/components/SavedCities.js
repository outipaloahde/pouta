import React from "react";

const btnStyle = {
  background: '#4a5972',
  color: '#b6b7ba',
  fontSize: '14',
  borderRadius: '4px',
  margin: '2px',
  padding: '12px 28px',
  border: '0px',
  fontFamily: 'Raleway'
};
const btn2Style = {
  background: '#4a5972',
  color: '#b6b7ba',
  fontSize: '13px',
  borderRadius: '4px',
  margin: '2px',
  padding: '8px 10px',
  border: '0px',
  fontFamily: 'Raleway'
};

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
    this.props.getSavedCity(city);
  };

  render() {
    const buttons = [];
    for (var i = 0; i < localStorage.length; i++) {
      buttons.push(localStorage.getItem(localStorage.key(i)));
    }
    
    return (
       <div>
         <div>
           <button onClick={this.showMenu} style={btnStyle}>Kaupunkini</button>
           {this.state.showMenu ? (
             <div
             className='menu'
             ref={element => {
               this.dropdownMenu = element;
             }}
              >
              {buttons.map(item => (
                <button onClick={() => this.cityClickHandler(item)} key={item} style={btn2Style}>{item}</button>
              ))}
              </div>
           ) : null}
         </div>
       </div>
    );
  }
}
export default SavedCities;