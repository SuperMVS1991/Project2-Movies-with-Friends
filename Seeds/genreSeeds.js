const sequelize = require('../config/connection');
const { Genre } = require('../models');
const genreSeeds = [

    {
        name: 'Action',
        description: 'Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like character development or complex plotting.',
        movieId: 1,
    },
    {
        name: 'Comedy',
        description: 'Comedy is a genre of film that uses humor as a driving force. The aim of a comedy film is to illicit laughter from the audience through entertaining stories and characters.',
        movieId: 2,
    },
    {
        name: 'Drama',
        description: 'Drama is a genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone, focusing on in-depth development of realistic characters who must deal with realistic emotional struggles.',
        movieId: 3,
    },
    {
        name: 'Horror',
        description: 'Horror is a genre of film that seeks to elicit fear in its audience for entertainment purposes. Horror films are unsettling movies that strive to elicit the emotions of fear, disgust and horror from viewers.',
        movieId: 4,
    },
    {
        name: 'Science Fiction',
        description: 'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
        movieId: 5,
    },
    {
        name: 'Musical',
        description: 'Musical film is a film genre in which songs sung by the characters are interwoven into the narrative, sometimes accompanied by dancing.',
        movieId: 6,
    },
    {
        name: 'Western',
        description: 'Western is a genre of fiction set primarily in the latter half of the 19th and early 20th century in the Western United States, which is styled the "Old West".',
        movieId: 7,
    },
    {
        name: 'Documentary',
        description: 'Documentary film is a broad category of visual expression that is based on the attempt, in one fashion or another, to document reality.',
        movieId: 8,
    },
    {
        name: 'Animation',
        description: 'Animation is a method in which figures are manipulated to appear as moving images.',
        movieId: 9,
    },
    {
        name: 'Fantasy',
        description: 'Fantasy is a genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore.',
        movieId: 10,
    },

];

const seedGenres = () => Genre.bulkCreate(genreSeeds, { individualHooks: true });

module.exports = seedGenres;

