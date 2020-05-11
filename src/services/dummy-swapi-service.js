export default class DummySwapiService {

    _people = [
        {
            id: 1,
            name: 'Bilbo Baggins [MOCKUP DATA]',
            gender: 'male',
            birthYear: 'Long times ago',
            eyeColor: 'dark brown'
        },
        {
            id: 2,
            name: 'Frodo Baggins [MOCKUP DATA]',
            gender: 'male',
            birthYear: 'Long times ago',
            eyeColor: 'dark brown'
        },
    ]

    _planets = [
        {
            id: 1,
            name: 'Earth [MOCKUP DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 sec',
            diameter: '12.742 km'
        },
        {
            id: 2,
            name: 'Venus [MOCKUP DATA]',
            population: 'empty data',
            rotationPeriod: '23 days',
            diameter: '12.140 km'
        },
    ]

    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [MOCKUP DATA]',
            model: 'North Grumman Shipbuilding',
            costInCredits: 'empty data',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 100,
            cargoCapacity: 150
        },
        {
            id: 2,
            name: 'TESLA [MOCKUP DATA]',
            model: 'X',
            costInCredits: 'empty data',
            length: '2.5',
            crew: 3,
            passengers: 3,
            cargoCapacity: 70
        },
    ]

    getAllPeople = async () => {
        return this._people
    }

    getPerson = async () => {
        return this._people[0]
    }

    getAllPlanets = async () => {
        return this._planets
    }

    getPlanet = async () => {
        return this._planets[0]
    }

    getAllStarships = async () => {
        return this._starships
    }

    getStarship = async () => {
        return this._starships[0]
    }

    getPersonImage = ({id}) => {
        return `https://www.fillmurray.com/640/360`
    }

    getStarshipImage = ({id}) => {
        return `https://www.fillmurray.com/640/360`
    }

    getPlanetImage = ({id}) => {
        return `https://www.fillmurray.com/640/360`
    }
}