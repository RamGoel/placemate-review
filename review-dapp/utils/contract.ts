export const ABI=[
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "reviewId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "rating",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comment",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "ReviewAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_companyName",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_rating",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_comment",
        type: "string",
      },
    ],
    name: "addReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllReviews",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint8[]",
        name: "",
        type: "uint8[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reviewId",
        type: "uint256",
      },
    ],
    name: "getReviewById",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];





export const address='0x5fbdb2315678afecb367f032d93f642f64180aa3'