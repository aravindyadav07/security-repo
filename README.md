# Secure Repo Lab

Welcome to the Secure Repo Lab! This repository intentionally contains security vulnerabilities for educational purposes. 

Your initial CI/CD pipeline will FAIL. Your objective is to fix these issues until the pipeline turns green.

## Mission Objectives

Below are the Fail → Fix → Pass stages:

### Stage 1: The Hardcoded Secret
- **Fail**: Gitleaks will detect a hardcoded fake API key in `index.js`.
- **Fix**: Remove the hardcoded secret `sk_test_***SECRET`.
- **Pass**: Replace it with `process.env.API_KEY` so the application can read the secret from the environment instead of source code.

### Stage 2: The Vulnerable Dependency
- **Fail**: `npm audit` will fail due to the intentionally vulnerable version of `lodash` (`4.17.15`) present in `package.json`.
- **Fix**: Update `lodash` to its latest secure version.
- **Pass**: The `npm audit --audit-level=high` step in your CI pipeline will run without finding high-level vulnerabilities.

## How to Complete the Lab
1. Clone or fork this repository.
2. Fix the issues mentioned above.
3. Commit and push your changes.
4. Continue tweaking and pushing until the GitHub Actions pipeline turns green!
