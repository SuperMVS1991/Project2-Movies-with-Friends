class Rating {
    constructor(movieId, userId, rating) {
        this.movieId = movieId;
        this.userId = userId;
        this.rating = rating;
    }

    // Add any additional methods or properties here

    // Example method to calculate average rating
    static calculateAverageRating(ratings) {
        if (ratings.length === 0) {
            return 0;
        }

        const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
        return totalRating / ratings.length;
    }
}

module.exports = Rating;