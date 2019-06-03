import React,{Component} from 'react';
import Form from './components/WeatherForm';
import Show from './components/WeatherShow';
import './App.css';



const API_KEY="116c8a0593625f7598627850d95d8d6d";

class App extends Component{

  state={
    country:'',
    city:'',
    temperature:'',
    humidity:'',
    description:'',
    error:''
  }


  getWeather=(e)=>{
    e.preventDefault();
    const country=e.target.country.value;
    const city=e.target.city.value;    
    if(city!== '' && country!==''){

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
      .then((res)=>res.json())
      .then((res)=>{
        
        this.setState({country,
        city,
        temperature:res.main.temp,
        humidity:res.main.humidity,
        description:res.weather[0].main,
        error:''});

      }
      )
    }
    else{
      
      this.setState({error:"Please make sure to enter City and Country"});
      console.log(  this.state.error);
    }
    
    
  }


  render(){
    return (
      <div className="wrapper">
        <div className="form-container">
          <div>
            <Form getWeatherClicked={this.getWeather}/>
            <Show information={this.state}/>
          </div>
      </div>
      </div>
      

      
    );
  }

  
}

export default App;
