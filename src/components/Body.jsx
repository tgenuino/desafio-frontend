import React from 'react';
import MediaQuery from 'react-responsive'
import Loader from './Loader';
import style from "./Body.styl"
import request from '../services/request'

const capitaisCode = ['riodejaneiro,rj', 'saopaulo,sp', 'belohorizonte,mg', 'brasilia,df', 'belem,pa', 'salvador,ba', 'fortaleza,ce', 'manaus,am', 'Joao Pessoa, PB, BR', 'Florianopolis, SC, Brazil'];

const splitArr  = (data, side = 'left') => {

    let halfWayThough = Math.floor(data.length / 2)
    
    let arrayFirstHalf = data.slice(0, halfWayThough);
    let arraySecondHalf = data.slice(halfWayThough, data.length);
    if(side === 'left'){
        return arrayFirstHalf;
    } else {
        return arraySecondHalf;
    }

};

const ListItem = props => {

    if(!props.name){
        return null
    }

    const { low, high, name } = props;

    return (
        <div className={style.listItem}>
            <span>{low}°</span>
            <span>{high}°</span>
            <span>{name}</span>
        </div>
    )
    
}

const List = props => {
    if(!props.data){
        return <Loader/>
    }   

    return (
        <div className={style.listSection}>
            {
                props.disableLabel && <MediaQuery minDeviceWidth={576}>
                    <div className={style.listLabel}>
                        <span>Min</span>
                        <span>Máx</span>
                    </div>
                </MediaQuery>
            }

            {props.disableLabel || <div className={style.listLabel}>
                <span>Min</span>
                <span>Máx</span>
            </div>}

            <div className={style.listUl}>
                {props.data.map((value, index) => {
                    if (!value) {
                        return <Loader />
                    }

                    if (!value.forecasts[0]){
                        return null
                    }

                    let {high, low } = value.forecasts[0];

                    return (
                        <React.Fragment key={index}>
                            <ListItem low={low} high={high} name={value.location.city} />
                        </React.Fragment>
                    )         
                })}
            </div>
        </div>
    )
}

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            capitaisWeather: []
        };
    }

    componentDidMount() {
        this.CityList();
    }

    CityList() {
        let self = this;
        capitaisCode.map((value)=>{
            request.get(
                `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${value}&format=json&u=c`,
                null,
                null,
                function (err, data, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        let parsedJson = JSON.parse(data);
                        self.setState(prevState => ({ capitaisWeather: [...prevState.capitaisWeather, parsedJson ] }));
                    }
                }
            );
        })
    }

    render(){
        const { capitaisWeather } = this.state;
        return (
            <div className={'container ' + style.bodyContainer}>
                <h1 style={{color:'white',fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px'}}>Capitais</h1>
                <div className={style.listContainer}>
                    <List data={splitArr(capitaisWeather, 'left')} />
                    <List className={'right'} data={splitArr(capitaisWeather, 'right')} disableLabel={true} />
                </div>
            </div>
        )
    }
} 




export default Body

