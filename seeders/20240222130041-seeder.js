'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the data to be seeded
    const courseSeedData = [
      {
        "id": 4,
        "name": "DBMS",
        "description": "3 months",
        "price": 100,
        "course_id": "11",
        "faculty_id": "1",
        "createdAt": "2024-02-12T12:36:57.070Z",
        "updatedAt": "2024-02-12T12:40:29.433Z",
    },
    {
        "id": 6,
        "name": "67 min class",
        "description": "Udemy",
        "price": 100,
        "course_id": "12",
        "faculty_id": "1",
        "createdAt": "2024-02-12T12:37:07.284Z",
        "updatedAt": "2024-02-12T12:52:02.852Z",
    }
      // Add more courses as needed
    ];

    // Seed the courses
    await queryInterface.bulkInsert('Courses', courseSeedData, {});

    console.log('Courses seeded successfully.');
  },}