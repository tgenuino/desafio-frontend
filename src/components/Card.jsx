import React from 'react';
import { connect } from 'react-redux';
import { toggleCard } from './CardActions';
import Loader from './Loader.jsx'
import style from './Card.styl'
import { localizeWeatherCondition, localizeWeekdays } from '../helpers'


const ForecastListItem = props => {
    console.log(props.data)
  return  (
    <li className={style.fItem}>
        <b>{localizeWeekdays(props.data.day)}</b>
        <span>{props.data.low}° {props.data.high}°</span>
    </li>
)};

const ForecastList = props => (
    <ul className={style.forecasts}>
        {props.data.map((value, index)=>(
            <ForecastListItem key={index} data={value}/>
        ))}
    </ul>
)

class Card extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            cardIsOpen: this.props.isCardOpen
        }

        this.closeCard = this.closeCard.bind(this);
    }

    closeCard(){
        this.props.toggleCard(false);
    }

    componentDidMount(){
        
    }

    render(){

        if (this.props.loading || !this.props.activeForecast){
            return (
                <div className={style.cardContainer}>
                    <Loader/>
                </div>
            )
        }

        const { activeForecast } = this.props;
        const { current_observation, forecasts, location } = activeForecast;

        const collection = forecasts.filter((val,index, arr)=>{
            return index <= 5 && index !== 0
        });
        console.log(collection)

        return (
            <div className={style.cardContainer}>
                <div className={style.topContainer}>
                    <span className={style.localidade}>{location.city}, {location.region} - Brasil</span>
                    <span className={style.close} onClick={this.closeCard}>X</span>
                </div>
                <div className={style.resumeContainer}>
                    <h1 className={style.resumeHeading}>{current_observation.condition.temperature}°C {localizeWeatherCondition(current_observation.condition.code)}</h1>
                    <div className={style.extremes}>
                        <span className={style.min}><span>↓</span><b>{forecasts[0].low}°</b></span>
                        <span className={style.max}><span>↑</span><b>{forecasts[0].high}°</b></span>
                        <span className={style.sensation}>Sensação<b>{current_observation.wind.chill}°</b></span>
                    </div>
                    <div className={style.details}>
                        <span className={style.wind}>Vento <b>{current_observation.wind.speed}km/h</b></span>
                        <span className={style.humidity}>Humidade<b>{current_observation.atmosphere.humidity}%</b></span>
                    </div>
                </div>
                <hr/>
                <ForecastList data={collection}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCard: (bool) => {
            dispatch(toggleCard(bool));
        }
    };
};

function mapStateToProps(state, ownProps) {
    return {
        isCardOpen: state.card.isCardOpen,
        activeForecast: state.card.selectedCapitalForecast,
        loading: state.card.loading
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);