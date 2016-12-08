# react-component-template [![build status](https://travis-ci.org/trendmicro-frontend/react-component-template.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-component-template) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-component-template/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-component-template?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-component-template.png?downloads=true&stars=true)](https://www.npmjs.com/package/@trendmicro/react-component-template)

## Contents

- Empty React component
- Example
- ESLint (.eslintrc)
- Babel (.babelrc)
- .gitignore and .npmignore
- Tests and Coverage
- Travis CI (.travis.yml)

## Usage

1. Clone the repository with a different name:
  ```sh
  git clone git@github.com:trendmicro-frontend/react-component-template.git react-example
  ```

2. Remove .git from the newly directory and rename all the occurrences of "react-component-template" into your project name:
  ```sh
  cd react-example; rm -rf ./.git
  sed -i '' 's/react-component-template/react-example/g' *.* examples/*
  ```

## License

MIT
