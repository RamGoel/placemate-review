// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanyReview {
    // Struct to store company review information
    struct Review {
        string companyName;
        uint8 rating; // Assuming rating is on a scale of 0 to 5
        string comment;
        uint256 date;
    }

    // Mapping to store reviews based on review ID
    mapping(uint256 => Review) private reviews;

    // Counter to keep track of the number of reviews
    uint256 private reviewCount;

    // Event emitted when a new review is added
    event ReviewAdded(
        uint256 indexed reviewId,
        string companyName,
        uint8 rating,
        string comment,
        uint256 date
    );

    // Function to add a new review
    function addReview(
        string memory _companyName,
        uint8 _rating,
        string memory _comment
    ) external {
        // Increment review count and use it as the review ID
        reviewCount++;
        uint256 reviewId = reviewCount;

        // Create a new review and store in the mapping
        reviews[reviewId] = Review(_companyName, _rating, _comment, block.timestamp);

        // Emit the ReviewAdded event
        emit ReviewAdded(reviewId, _companyName, _rating, _comment, block.timestamp);
    }

    // Function to get information of a specific review by ID
    function getReviewById(uint256 _reviewId)
        external
        view
        returns (
            string memory,
            uint8,
            string memory,
            uint256
        )
    {
        // Ensure the review ID is valid
        require(_reviewId > 0 && _reviewId <= reviewCount, "Invalid review ID");

        // Retrieve and return review information
        Review memory review = reviews[_reviewId];
        return (review.companyName, review.rating, review.comment, review.date);
    }

    // Function to get information of all reviews
    function getAllReviews()
        external
        view
        returns (
            uint256[] memory,
            string[] memory,
            uint8[] memory,
            string[] memory,
            uint256[] memory
        )
    {
        // Initialize arrays to store review information
        uint256[] memory reviewIds = new uint256[](reviewCount);
        string[] memory companyNames = new string[](reviewCount);
        uint8[] memory ratings = new uint8[](reviewCount);
        string[] memory comments = new string[](reviewCount);
        uint256[] memory dates = new uint256[](reviewCount);

        // Loop through all reviews and populate arrays
        for (uint256 i = 1; i <= reviewCount; i++) {
            Review memory review = reviews[i];
            reviewIds[i - 1] = i;
            companyNames[i - 1] = review.companyName;
            ratings[i - 1] = review.rating;
            comments[i - 1] = review.comment;
            dates[i - 1] = review.date;
        }

        // Return arrays of review information
        return (reviewIds, companyNames, ratings, comments, dates);
    }
}
