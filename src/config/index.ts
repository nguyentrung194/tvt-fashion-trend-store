const local = {
  domain: "http://localhost:8888",
  httpGrapqlUri: "https://store-of-king.hasura.app/v1/graphql",
  wsGrapqlUri: "wss://store-of-king.hasura.app/v1/graphql",
  firebase: {
    apiKey: "AIzaSyAd0QoDGXB96-Q2_h5F6Q0InsNiJm-0Wqc",
    authDomain: "store-of-king.firebaseapp.com",
    databaseURL: "https://store-of-king-default-rtdb.firebaseio.com",
    projectId: "store-of-king",
    storageBucket: "store-of-king.appspot.com",
    messagingSenderId: "197837754370",
    appId: "1:197837754370:web:c0e795a7eefb55db9fd71b",
    measurementId: "G-LG90ZVYYWC",
  },
};

const staging = {
  domain: "http://localhost:8888",
  httpGrapqlUri: "https://store-of-king.hasura.app/v1/graphql",
  wsGrapqlUri: "wss://store-of-king.hasura.app/v1/graphql",
  firebase: {
    apiKey: "AIzaSyAd0QoDGXB96-Q2_h5F6Q0InsNiJm-0Wqc",
    authDomain: "store-of-king.firebaseapp.com",
    databaseURL: "https://store-of-king-default-rtdb.firebaseio.com",
    projectId: "store-of-king",
    storageBucket: "store-of-king.appspot.com",
    messagingSenderId: "197837754370",
    appId: "1:197837754370:web:c0e795a7eefb55db9fd71b",
    measurementId: "G-LG90ZVYYWC",
  },
};

const prod = {
  domain: "http://localhost:8888",
  httpGrapqlUri: "https://store-of-king.hasura.app/v1/graphql",
  wsGrapqlUri: "wss://store-of-king.hasura.app/v1/graphql",
  firebase: {
    apiKey: "AIzaSyAd0QoDGXB96-Q2_h5F6Q0InsNiJm-0Wqc",
    authDomain: "store-of-king.firebaseapp.com",
    databaseURL: "https://store-of-king-default-rtdb.firebaseio.com",
    projectId: "store-of-king",
    storageBucket: "store-of-king.appspot.com",
    messagingSenderId: "197837754370",
    appId: "1:197837754370:web:c0e795a7eefb55db9fd71b",
    measurementId: "G-LG90ZVYYWC",
  },
};

let envConfig = local;

if (process.env.REACT_APP_STAGE === "staging") {
  envConfig = staging;
} else if (process.env.REACT_APP_STAGE === "prod") {
  envConfig = prod;
} else {
  envConfig = local;
}

const environment = envConfig;

export default environment;
