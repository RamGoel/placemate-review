// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FeedbackAndRating {
    struct Feedback {
        uint8 rating;
        string comment;
    }

    struct CompanyFeedback {
        string companyName;
        uint16 year;
        mapping(address => Feedback) userFeedback;
    }

    mapping(bytes32 => CompanyFeedback) public feedbackMap;

    event FeedbackAdded(address indexed user, string companyName, uint16 year, uint8 rating, string comment);

    modifier hasNotProvidedFeedback(string memory _companyName, uint16 _year) {
        bytes32 key = keccak256(abi.encodePacked(_companyName, _year));
        require(feedbackMap[key].userFeedback[msg.sender].rating == 0, "Feedback already provided");
        _;
    }

    function addFeedback(string memory _companyName, uint16 _year, uint8 _rating, string memory _comment) external hasNotProvidedFeedback(_companyName, _year) {
        require(_rating >= 1 && _rating <= 5, "Invalid rating. Ratings must be between 1 and 5");

        bytes32 key = keccak256(abi.encodePacked(_companyName, _year));
        Feedback memory newFeedback = Feedback(_rating, _comment);
        feedbackMap[key].companyName = _companyName;
        feedbackMap[key].year = _year;
        feedbackMap[key].userFeedback[msg.sender] = newFeedback;

        emit FeedbackAdded(msg.sender, _companyName, _year, _rating, _comment);
    }
}
