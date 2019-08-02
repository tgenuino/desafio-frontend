import { TOGGLE_CARD, TOGGLE_SUGGESTIONS, TOOGLE_LOADING, FETCH_CITY } from './CardActions'

const INITIAL_STATE = {
    loading: false,
    selectedCapitalForecast: null,
    isCardOpen: false,
    isSuggestionsOpen: false,
    capitais: ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília', 'Belém', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa', 'Florianópolis'],
  capitaisCode: ['riodejaneiro,rj', 'saopaulo,sp', 'Belo Horizonte, MG, Brazil', 'brasilia,df', 'belem,pa', 'salvador,ba', 'Curitiba, PR, Brazil', 'fortaleza,ce', 'manaus,am', 'Joao Pessoa, PB, Brazil', 'Florianopolis, SC, Brazil']
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOOGLE_LOADING:
      return Object.assign({}, state, {
        loading: action.bool
      })
    case TOGGLE_SUGGESTIONS:
      return Object.assign({}, state, {
        isSuggestionsOpen: action.bool
      })
    case TOGGLE_CARD:
        return Object.assign({}, state, {
            isCardOpen: action.bool
        })
    case FETCH_CITY:
      return Object.assign({}, state, {
        selectedCapitalForecast: action.data
      })    
    default:
      return state;
  }
}