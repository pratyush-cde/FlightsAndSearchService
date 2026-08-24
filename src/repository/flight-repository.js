const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("error occured at repository layer");
      throw { error };
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flights.findByPk(id);
      return flight;
    } catch (error) {
      console.log("error occured at repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
