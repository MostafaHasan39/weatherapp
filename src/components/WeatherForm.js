
import React,{Component} from 'react';

class WeatherForm extends Component{




    render(){
        return (
            <div>
                <form onSubmit={this.props.getWeatherClicked}>
                <input type="text" id="city" name="city" placeholder="Enter city..."></input>
                <br/>
                <input type="text" id="country" name="country" placeholder="Enter country..."></input>
                <br/>
                <button>Get Weather</button>
                </form>
            </div>
        )
    }
}


export default WeatherForm;