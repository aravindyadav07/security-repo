const lodash = require('lodash');

// Read API key from environment for security
const API_KEY = process.env.API_KEY || "Not provided";

console.log("Loading secure-repo-lab...");
console.log("Using API Key:", API_KEY ? "***" : "None");
