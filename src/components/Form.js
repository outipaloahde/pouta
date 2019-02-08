import React from 'react';

const btnStyle = {
    background: '#4a5972',
    color: '#b6b7ba',
    fontSize: '14px',
    borderRadius: '4px',
    margin: '2px',
    padding: '8px 7px',
    border: '0px',
    fontFamily: 'Raleway'
};
class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='kaupunki'></input>
                <button style={btnStyle} >Hae sää</button>
            </form>
        );
    }
}
export default Form;


 