# react-component-template

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
  sed -i '' 's/react-component/react-example/g' *.* examples/*
  sed -i '' 's/React Component/React Example/g' *.* examples/*
  sed -i '' 's/Component/Example/g' README.md src/index.js
  mv src/Component.jsx src/Example.jsx
  ```

## License

MIT
