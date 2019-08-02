import React from 'react';
import { connect } from 'react-redux';
import { toggleCard, toggleSuggestions, fetchCity } from './CardActions';
import style from "./Header.styl"

class InputSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            filtered: [],
            capitais: ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília', 'Belém', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa', 'Florianópolis']
        };
        this.handleChange = this.handleChange.bind(this);
        this.openSuggestions = this.openSuggestions.bind(this);
        this.closeSuggestions = this.closeSuggestions.bind(this);
        this.searchCityAndOpenCard = this.searchCityAndOpenCard.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.state.capitais
        });
    }

    openSuggestions() {
        this.props.toggleSuggestions(true)
    }

    closeSuggestions() {
        this.props.toggleSuggestions(false)
    }

    handleChange(e) {
        this.openSuggestions();

        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.state.filtered;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.state.capitais;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleOutsideClick, false)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleOutsideClick, false)
    }

    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.closeSuggestions();
    }

    searchCityAndOpenCard = param => e => {
        this.setState(prevState=> ({...prevState, value: param }));
        this.props.fetchCity(param);
    };

    render() {
        return (
            <React.Fragment>
                <div className={style.inputSection}>
                    <div className={style.formGroup}>
                        <input type="text" className={style.searchInput + ' form-control'} placeholder="Insira aqui o nome da cidade" value={this.state.value} onClick={this.openSuggestions} onChange={this.handleChange} />
                        <span className={style.formControlFeedback + ' fa fa-search'}></span>
                    </div>
                </div>
                <ul className={style.ul} style={{ display: this.props.isSuggestionsOpen && 'block' }} ref={node => this.node = node}>
                    {this.state.filtered.map((item, key) => (
                        <li key={key} onClick={this.searchCityAndOpenCard(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCard: (bool) => {
            dispatch(toggleCard(bool));
        },
        toggleSuggestions: (bool) => {
            dispatch(toggleSuggestions(bool));
        },
        fetchCity: (location) => {
            dispatch(fetchCity(location));
        }
    };
};

function mapStateToProps(state, ownProps) {
    return {
        isCardOpen: state.card.isCardOpen,
        isSuggestionsOpen: state.card.isSuggestionsOpen
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputSection);