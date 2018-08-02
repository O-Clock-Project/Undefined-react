Projet de base React
====================

Bienvenue dans ce modèle/template de projet React !

Première utilisation
--------------------

Récupérez une copie du modèle :

```sh
git clone git@github.com:O-clock-Invaders/React-modele.git

cd React-modele

yarn # installe les dépendances du projet

yarn start # lance le serveur de developpement
# rdv sur http://localhost:8080/
```

Comment démarrer un projet avec ce modèle
-----------------------------------------

En pratique, on peut se baser sur React-modele pour démarrer un *nouveau* projet, ou travailler sur un challenge.

Il s'agit essentiellement de copier/coller les parties intéressantes du modèle dans le dossier du projet/challenge, sans écraser d'éventuels fichiers spécifiques :

``` sh
# Exemple : après avoir cloné un challenge dans le dossier mon-challenge/

# direction le dossier du challenge
cd mon-challenge

# copie des fichiers non-cachés présents à la racine du modèle
cp -n ../React-modele/* .

# copie des fichiers cachés présents à la racine du modèle
cp -n ../React-modele/.* . 

# copie du dossier src/
cp -nr ../React-modele/src .  

# installation des dépendances
yarn

# lancement du serveur de dev
yarn start
```

Build du projet
---------------

Webpack peut construire le projet en réunissant les différents fichiers de l'application

Un script `build:dev` est à disposition pour rassembler les fichiers sans traitement particulier

Un script `build:prod` est à disposition pour réaliser pour minifier et optimiser les fichiers

```sh
# dans le dossier du projet
cd mon-projet

# build de développement : Les fichiers sont rassemblés
yarn build:dev

# build de production : Les fichiers sont rassemblés et optimisés
yarn build:prod

```

Dépendaces de développement
---------------------------

Les commandes ci-dessous sont simplement indiquées pour mémoire, ne pas les lancer !

**Webpack**

``` sh
# Webpack
yarn add --dev webpack webpack-cli
# serveur de developpement
yarn add --dev webpack-dev-server
# Plugins
yarn add --dev html-webpack-plugin
yarn add --dev mini-css-extract-plugin
yarn add --dev optimize-css-assets-webpack-plugin
yarn add --dev uglifyjs-webpack-plugin
```

- webpack.config.js

**Babel (ES6/JSX -> ES5)**

``` sh
# Babel
yarn add --dev babel-core
# Babel pour webpack
yarn add --dev babel-loader
# vocabulaire ES6 -> ES5 de base
yarn add --dev babel-preset-env
# vocabulaire React
yarn add --dev babel-preset-react
# Plugin : propriétés de classes
yarn add --dev babel-plugin-transform-class-properties
# Plugin : rest et spread operator pour les objets
yarn add --dev babel-plugin-transform-object-rest-spread
```

- .babelrc

**ESLint**

``` sh
# ESLint
yarn add --dev eslint
# Config ESLint
yarn add --dev eslint-config-airbnb babel-eslint
# ESLint résolution des imports
yarn add --dev eslint-import-resolver-webpack
yarn add --dev eslint-plugin-import 
# ESLint pour React
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react
```

- eslintrc
- .eslintignore

**CSS (Sass, PostCSS, autoprefixer)**

``` sh
# Traitement des styles et assets
yarn add --dev style-loader css-loader file-loader
# PostCSS et autoprefixer
yarn add --dev postcss autoprefixer postcss-loader
# SASS
yarn add --dev node-sass sass-loader
```

- .postcssrc
- .browserslistrc


Dépendances de projet
---------------------

**Utilitaires**

``` sh
yarn add babel-polyfill
```

**React**

```sh
yarn add react react-dom prop-types
```

Outils pratiques
----------------

**Extension React Dev Tools**
  
- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)


Tests
-----

avec le script : `yarn test` les tests sont lancés

```
NODE_PATH=./ mocha --require babel-core/register --require tests/.setup.js tests/**/*.test.js
```

**Mocha**

```sh
yarn add --dev mocha
```

Framework de test proposant des syntaxes pour structurer des série de tests : 

- describe()
- it()
- skip()

**Chai**

```sh
yarn add --dev chai
```

Librairie d'assertions proposant différentes syntaxes :

- assert
- should
- expect

**Enzyme**

```sh
yarn add --dev enzyme
yarn add --dev enzyme-adapter-react-16
yarn add --dev jsdom
yarn add --dev ignore-styles
```

Librairie de test pour les composants React offrant (avec l'appui de jsdom) de monter des composants dans un DOM virtuel :

- shallow
- mount
- render
