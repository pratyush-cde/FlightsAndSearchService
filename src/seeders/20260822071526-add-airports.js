"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("airports", [
      {
        name: "Kempegowda Intenational Airport",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysuru Airport",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mangaleru Intenational Airport",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indra Gandhi Intenational Airport",
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
