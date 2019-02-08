import React from 'react';
//import { Image } from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <div>
            <img src={require('../images/etana_logo.png')} alt='logo'></img>
           
           
            </div>
        );
    }
}
export default Header;
//  <Image src="src/etana_logo.png" fluid />;