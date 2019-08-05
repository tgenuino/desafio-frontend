import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNewCity } from '../../actions';
import { message, Input, Divider } from 'antd';
import Grids from '../../components/Grids';
import CardList from '../../components/CardList';
import forecastService from '../../services/forecastService';

import './home.css';

const { Search } = Input;

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  errorMsg() {
    message.error('Ops!!! Não encontramos informações para essa cidade.');
  };

  searchNewWeatherCity(cityName) {
    let that = this;
    const { searchNewCity } = this.props;

    forecastService(cityName, (data) => {

      if (data) {
        searchNewCity({
          cityName: cityName.toLocaleLowerCase(),
          cityForecastData: data
        });
      } else {
        that.errorMsg();
      }

      that.setState({
        inputValue: ''
      });
    });

  }

  getCitysToGrid(){
    return ['Rio Branco','Maceió', 'Macapá', 'Manaus','Salvador','Fortaleza','Brasília','Vitória','Goiânia',
    'São Luís','Cuiabá','Campo Grande','Belo Horizonte','Belém','João Pessoa','Curitiba','Recife','Teresina',
    'Rio de Janeiro','Natal','Porto Alegre','Porto Velho','Boa Vista','Florianópolis','São Paulo','Aracaju',
    'Palmas'];
  }

  render() {

    const { inputValue } = this.state;

    return (

      <main className="page-main">
        <section className="page-title">
          <h1>Previsão do Tempo</h1>
        </section>
        <section>
          <CardList />
        </section>
        <br />
        <section className="page-title" >
          <Search size="large" value={inputValue}
            onChange={(event) => {
              this.setState({
                inputValue: event.target.value
              });
            }
            }
            onSearch={newCity => {
              this.searchNewWeatherCity(newCity);
            }}
            placeholder="Insira aqui o nome da Cidade." style={{ width: 400 }} />
        </section>
        <section className="page-title">
          <Divider />
          <h3> Capitais </h3>
          <Grids cityList={this.getCitysToGrid()} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = store => ({
  citysToCard: store.searchReducer.citysToCard
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchNewCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
