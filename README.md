# react-component-template [![build status](https://travis-ci.org/trendmicro-frontend/react-component-template.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-component-template) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-component-template/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-component-template?branch=master)

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
  cd react-example
  ```

2. Choose a branch you'd like to use:
 
 * <b>babel</b> - ES2016
   ```sh
   git checkout babel
   ```
 
 * <b>webpack</b> - ES2016 + CSS Modules
   ```sh
   git checkout webpack
   ```

3. Remove .git from the newly directory and rename all the occurrences of "react-component" into your project name:
  ```sh
  rm -rf ./.git
  sed -i '' 's/react-component/react-example/g' *.* {docs,examples}/*
  sed -i '' 's/React Component/React Example/g' *.* {docs,examples}/*
  ```

## License

MIT
