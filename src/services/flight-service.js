const { FlightRepository, AirplaneRepository } = require("../repository/index");

const { comapreTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!comapreTime(data.arivalTime, data.departureTime)) {
        throw { error: "arrival time must be greater than departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId,
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getFlightData(id) {
    try {
      const flight = await this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
/**
 * {
 *   flightNumber
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * departureTime,
 * arrivalTime,
 * price,
 * totalSeats --> airplane,
 * }
 */
