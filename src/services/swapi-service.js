// https://swapi.dev
export default class SwapiService {

  _apiBase = 'https://swapi.dev/api'

  async getData(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`
        could not fecth: ${url},
        recieved ${res.status}`)
    }

    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getData('/people/')
    return res.results
  }

  getPerson(id) {
    return this.getData(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getData('/planets/')
    return res.results.map(this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getData(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getData('/starships/')
    return res.results.map(this._transformStarship)
  }

  async getStarship(id) {
    const starship = await this.getData(`/starships/${id}`)
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet(planet) {
    return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}