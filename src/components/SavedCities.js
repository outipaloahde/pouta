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


  render() {
    const buttons = [];
    for (var i = 0; i < localStorage.length; i++) {
      buttons.push(localStorage.getItem(localStorage.key(i)));
      console.log("buttons", buttons);
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
                <button>{item}</button>
              ))}
              </div>
           ) : null}
         </div>


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
