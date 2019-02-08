import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='kaupunki'></input>
                <button className="btn btn">Hae sää</button>
            </form>
        );
    }
}
export default Form;


 