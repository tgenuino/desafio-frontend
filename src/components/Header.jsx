import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import InputSection from './InputSection.jsx'
import Loader from './Loader';
import Card from './Card.jsx';
import style from "./Header.styl"

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cardIsOpen: false
        };
    }
    render(){
        console.log({'loading':this.props.loading, 'isCardOpen': this.props.isCardOpen});
        console.log(!this.props.loading && this.props.isCardOpen ? '<Card/>' : (this.props.loading && this.props.isCardOpen ? '<Loader />' : 'null'));
        return  (
                    <header>
                        <MediaQuery maxDeviceWidth={576}>
                    <h1 className={style.appName} style={this.props.isCardOpen ? { whiteSpace: 'nowrap', fontSize: '1.7rem', padding: '16px' } : { whiteSpace: 'normal' }}>Previsão do tempo</h1>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={576}>
                            <h1 className={style.appName}>Previsão <br /> do tempo</h1>
                        </MediaQuery>
                        {!this.props.loading && this.props.isCardOpen ? <Card /> : (this.props.loading && this.props.isCardOpen ? <Loader /> : null)}
                        <InputSection />
                    </header>
                )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isCardOpen: state.card.isCardOpen,
        loading: state.card.loading
    };
}

export default connect(
    mapStateToProps
)(Header);

