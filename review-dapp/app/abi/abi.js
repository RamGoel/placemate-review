export const ABI=[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "pname",
          "type": "string"
        }
      ],
      "name": "addProductEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "avgRating",
          "type": "uint256"
        }
      ],
      "name": "reviewProductEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ProductIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "TotalProducts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "pname",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "imagehash",
          "type": "string"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllProductPids",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        }
      ],
      "name": "getAllUsersForProduct",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        }
      ],
      "name": "getCurrentUserComments",
      "outputs": [
        {
          "internalType": "string",
          "name": "ucomments",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        }
      ],
      "name": "getCurrentUserRating",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "urating",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        }
      ],
      "name": "getProduct",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "productName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "productPrice",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "productHash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "avgRating",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalReviewed",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "users",
              "type": "address[]"
            }
          ],
          "internalType": "struct ReviewSystem.Product",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        }
      ],
      "name": "getProductAvgRating",
      "outputs": [
        {
          "internalType": "string",
          "name": "pname",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "avgRating",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalProducts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserComments",
      "outputs": [
        {
          "internalType": "string",
          "name": "ucomments",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserDateOfReview",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reviewDate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserRating",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "urating",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "productDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "productName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "productPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "productHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "avgRating",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalReviewed",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "urating",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ucomments",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "reviewDate",
          "type": "uint256"
        }
      ],
      "name": "reviewProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userReview",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rating",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "comments",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "dateOfReview",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "IsProductReviewedByUser",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]