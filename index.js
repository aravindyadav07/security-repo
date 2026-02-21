const lodash = require('lodash');

// Hardcoded secret for testing gitleaks
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";
// Read API key from environment for security
const API_KEY = process.env.API_KEY || "Not provided";

console.log("Loading secure-repo-lab...");
console.log("Using API Key:", API_KEY ? "***" : "None");
