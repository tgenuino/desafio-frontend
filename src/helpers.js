export function normalizeString(str){
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

// 0	tornado
// 1	tropical storm
// 2	hurricane
// 3	severe thunderstorms
// 4	thunderstorms
// 5	mixed rain and snow
// 6	mixed rain and sleet
// 7	mixed snow and sleet
// 8	freezing drizzle
// 9	drizzle
// 10	freezing rain
// 11	showers
// 12	rain
// 13	snow flurries
// 14	light snow showers
// 15	blowing snow
// 16	snow
// 17	hail
// 18	sleet
// 19	dust
// 20	foggy
// 21	haze
// 22	smoky
// 23	blustery
// 24	windy
// 25	cold
// 26	cloudy
// 27	mostly cloudy(night)
// 28	mostly cloudy(day)
// 29	partly cloudy(night)
// 30	partly cloudy(day)
// 31	clear(night)
// 32	sunny
// 33	fair(night)
// 34	fair(day)
// 35	mixed rain and hail
// 36	hot
// 37	isolated thunderstorms
// 38	scattered thunderstorms
// 39	scattered showers(day)
// 40	heavy rain
// 41	scattered snow showers(day)
// 42	heavy snow
// 43	blizzard
// 44	not available
// 45	scattered showers(night)
// 46	scattered snow showers(night)
// 47	scattered thundershowers

export function localizeWeatherCondition(code){
  switch(code){
    case 0:
      return 'Tornado';
    case 1:
      return 'Tempestade Tropical';
    case 2:
      return 'Furacão';
    case 3:
      return 'Trovoadas Severas';
    case 4:
      return 'Trovoadas';
    case 5:
      return 'Chuva e Neve';
    case 6:
      return 'Chuva e Granizo';
    case 7:
      return 'Granizo e Neve';
    case 8:
      return 'Chuviscos Congelantes';
    case 9:
      return 'Chuviscos';
    case 10:
      return 'Chuva Congelante';
    case 11:
      return 'Chuva Intensa';
    case 12:
      return 'Chuva';
    case 13:
      return 'Flocos de Neve';
    case 14:
      return 'Chuva e Neve';
    case 15:
      return 'Neve Intensa';
    case 16:
      return 'Neve';
    case 17:
      return 'Granizo';
    case 18:
      return 'Granizo';
    case 19:
      return 'Poeira';
    case 20:
      return 'Neblina';
    case 21:
      return 'Neblina';
    case 22:
      return 'Fumaçeiro';
    case 23:
      return 'Ventos Leves';
    case 24:
      return 'Ventania';
    case 25:
      return 'Frio';
    case 26:
      return 'Nublado';
    case 27:
          return 'Totalmente Nublado';//(Noite)
    case 28:
          return 'Totalmente Nublado'; //  (Dia)
    case 29:
          return 'Parcialmente Nublado';//(Noite)
    case 30:
          return 'Parcialmente Nublado'; //  (Dia)
    case 31:
          return 'Limpo';//(Noite)
    case 32:
      return 'Ensolarado';
    case 33:
          return 'Temperatura Agradável'; //(Noite)
    case 34:
          return 'Ensolarado'; //  (Dia)
    case 35:
      return 'Chuva e Granizo';
    case 36:
      return 'Quente';
    case 37:
      return 'Tempestades Isoladas';
    case 38:
      return 'Tempestades Dispersas';
    case 39:
          return 'Chuvas Dispersas';//  (Dia)
    case 40: 
      return 'Chuva Intensa';
    case 41:
      return 'Chuva e Neve Dispersas';
    case 42:
      return 'Neve Intensa';
    case 43:
      return 'Nevasca';
    case 44:
      return 'Indisponível';
    case 45:
          return 'Chuvas Dispersas';// (Noite)
    case 46:
          return 'Chuva e Neve Dispersas';// (Noite)
    case 47:
      return 'Tempestades Dispersas';
    default:
      return 'Indisponível';
  }
}

// Mon
// Tue
// Wed
// Thu
// Fri
// Sat
// Sun
export function localizeWeekdays(str) {
    switch(str){
        case 'Mon':
            return 'Segunda';
        case 'Tue':
            return 'Terça';
        case 'Wed':
            return 'Quarta';
        case 'Thu':
            return 'Quinta';
        case 'Fri':
            return 'Sexta';
        case 'Sat':
            return 'Sábado';
        case 'Sun':
            return 'Domingo';
    }
}