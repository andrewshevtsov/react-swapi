// https://swapi.dev

class SwapiService {

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
    return res.results
  }

  getPlanet(id) {
    return this.getData(`/planet/${id}`)
  }

  async getAllStarships() {
    const res = await this.getData('/starships/')
    return res.results
  }

  getStarship(id) {
    return this.getData(`/starships/${id}`)
  }
}

const swapi = new SwapiService()

swapi.getPerson(3).then((person) => {
    console.log(person.name)
})