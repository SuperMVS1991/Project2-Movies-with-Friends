// Import necessary modules or models here
const Comment = require('./models/Comment'); // Example import for a Comment model

// Define your seed data here
const commentsData = [
    {
        postId: 1,
        userId: 1,
        content: "Great movie!",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        postId: 1,
        userId: 2,
        content: "I didn't like it.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // More seed data...
];

// Write your seeding logic here
const seedComments = async () => {
    try {
        // Clear existing data if needed
        await Comment.deleteMany({});

        // Insert seed data into the database
        await Comment.insertMany(commentsData);

        console.log('Seed data inserted successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

// Export any necessary data or functions here
module.exports = seedComments;
