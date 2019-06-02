import React,{ Component } from 'react';


class WeatherShow extends Component{
    
    render(){
        return (
            <div>

                <div className="info">
                {
                    this.props.information.city && 
                    <p className="info-key">City:
                        <span className="info-value">{this.props.information.city}</span>
                    </p>
                    
                }

                {
                    this.props.information.country && 
                    <p className="info-key">Country:
                        <span className="info-value">{this.props.information.country}</span>
                    </p>
                    
                }

                {
                    this.props.information.temperature && 
                    <p className="info-key">Temperature:
                        <span className="info-value">{this.props.information.temperature}</span>
                    </p>
                    
                }

                {
                    this.props.information.humidity && 
                    <p className="info-key">Humidity:
                        <span className="info-value">{this.props.information.humidity}</span>
                    </p>
                    
                }

                {
                    this.props.information.description && 
                    <p className="info-key">Description:
                        <span className="info-value">{this.props.information.description}</span>
                    </p>
                    
                }

                {
                    this.props.information.error && 
                    <p className="info-key">error:
                        <span className="info-value">{this.props.information.error}</span>
                    </p>
                    
                }
                </div>
                {/* <h3>{ this.props.information.city ? `City:${this.props.information.city}`:""}</h3>
                <h3>{ this.props.information.country ? `Country:${this.props.information.country}`:""}</h3>
                <h3>{ this.props.information.temperature ? `Temperature:${this.props.information.temperature}`:""}</h3>
                <h3>{ this.props.information.humidity ? `Humidity:${this.props.information.humidity}`:""}</h3>
                <h3>{ this.props.information.description ? `Description:${this.props.information.description}`:""}</h3>
                <h3>{ this.props.information.error? `Error:${this.props.information.error}`:""}</h3> */}
            </div>
        )        
    }
}

export default WeatherShow;