# Improvement Plan: hacker-rank-problem

## Overview
Nine standalone JavaScript files with no tests, no package.json, and no shared structure. Hard to verify correctness or extend.

## Improvements

### Testing
- Add a root `package.json` and configure Jest
- Add a test file alongside each solution (e.g., `solution.test.js`) with the problem's sample inputs and edge cases
- Add a `npm test` script that runs all tests
- Add GitHub Actions CI to run tests on every push

### Code Quality
- Convert all files to TypeScript for type-safe input/output
- Add ESLint + Prettier
- Enforce consistent file naming: `<problem-name>.ts` + `<problem-name>.test.ts`

### Structure
- Add a root `README.md` linking to each problem on HackerRank with difficulty, domain, and the approach used
- Organize by domain: `algorithms/`, `data-structures/`, `strings/`, etc.
- Add algorithm complexity annotations (`// O(n log n) time, O(n) space`) to each solution

### Problem Coverage
- Expand the collection systematically across HackerRank domains: sorting, graphs, dynamic programming, etc.
- Add solutions to HackerRank's "Interview Preparation Kit" as a structured track
