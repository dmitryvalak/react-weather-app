var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <p>In {location} is {temp}</p>
    );
}

module.exports = WeatherMessage;
