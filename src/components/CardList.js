import React from 'react';
import { Row } from 'antd';
import Cards from './Cards';
import { connect } from 'react-redux';


class CardList extends React.Component {

    render(){
        
        const {citysToCard} = this.props;

        const weatherList = citysToCard.map((cityForecast)=>{
            return <Cards key={cityForecast.cityName} cityForecast={cityForecast}/>
        });

        return (
            <div className="gutter-example">
                <Row gutter={16} type="flex" justify="center">
                    {weatherList}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    citysToCard: store.searchReducer.citysToCard
});

export default connect(mapStateToProps)(CardList);