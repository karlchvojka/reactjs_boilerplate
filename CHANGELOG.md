# Changelog
All notable changes to the ReactJS template will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.1.2] - 2023-05-14

### Added
### Changed
- .eslintrc.js
  - Fixed no-static-element-interactions error
  - Fixed eslint configuration
  - Fixed eslint alias pathing error
- package-lock.json
  - Fixed vulnerability issue with JSON5. Simple package update.
- .gitignore
  - added coverage folder.

## [0.1.0] - 2023-03-26

### Added
./src/App.test.js
  - Implemented basic render test
./src/components/layouts/SidebarLayout
  - Added Layout with sidebar
### Changed
./package.json
  - Updated all packages
  - Updated project info
./README.md
  - Added instructions for maintenence on the template
./src/globalConfig/GlobalStyles
  - Added default font styles

#### Package updates:
Webpack Upgrde v5.74.0 => v5.76.3
Babel Upgrade v7.18.10 =>
@babel/cli                       ^7.18.10  →  ^7.21.0
@babel/core                      ^7.18.10  →  ^7.21.3
@babel/eslint-parser              ^7.18.9  →  ^7.21.3
@babel/plugin-transform-runtime  ^7.18.10  →  ^7.21.0
@babel/runtime                    ^7.18.9  →  ^7.21.0
babel-loader                       ^8.2.5  →   ^9.1.2
eslint                            ^8.21.0  →  ^8.36.0
eslint-config-prettier             ^8.5.0  →   ^8.8.0
eslint-plugin-import              ^2.26.0  →  ^2.27.5
eslint-plugin-jsx-a11y             ^6.6.1  →   ^6.7.1
eslint-plugin-react               ^7.30.1  →  ^7.32.2
html-loader                        ^4.1.0  →   ^4.2.0
styled-components                  ^5.3.5  →   ^5.3.9
webpack-cli                       ^4.10.0  →   ^5.0.1
webpack-dev-server                 ^4.9.3  →  ^4.13.1

#### Package Installs:
@testing-library/jest-dom: ^5.16.5,
@testing-library/react: ^14.0.0,
babel-jest: ^29.5.0,
jest: ^29.5.0,
jest-environment-jsdom: ^29.5.0,
react-test-renderer: ^18.2.0,

## [0.0.4] - 2022-08-29
Issue fixing

Note: #3 was done first to establish folder/file settings for the mobile setup

[#3 Global Config](https://github.com/karlchvojka/reactjs_template_2022/issues/3)\
[#2 Default Mobile Setup](https://github.com/karlchvojka/reactjs_template_2022/issues/2)\
[#6 Webpack configuration](https://github.com/karlchvojka/reactjs_template_2022/issues/6)

### Added

#### #3
- Added /src/globalAssets folder
- Added /src/globalAssets/data folder
- Added /src/globalAssets/fonts folder
- Added /src/globalAssets/fonts/fonts.js file
- Added /src/globalAssets/images folder
- Added /src/globalConfig folder
- Added /src/globalConfig/GlobalStyles.js

#### #2
- Added /src/globalConfig/mobile.js
- Added /src/globalConfig/templates folder
- Added /src/globalConfig/templates/styles.js file

#### #6
- Added /public/favicon.ico
- Added /public/index.html
- Added /public/manifest.json
- Added /public/robots.txt
- Added /public/sitemap.xml
- Added /src/template.html
- Installed babel-loader (8.2.5)
- Installed html-loader (4.1.0)
- Installed html-webpack-plugin (5.5.0)

### Changed

#### #3
- /src/App.js
  - Added GlobalStyles import.

#### #2
- /.eslintrc.js
  - Added arrow-body-style rules
  - Added quotes rule
  - Added no-static-element-interactions rule
- /src/globalConfig/GlobalStyles.js
  - Added Mobile import
  - Added default mobile breakpoints
- /src/StyledApp.js
  - Added Mobile import
  - Added default mobile breakpoints
- /src/components/modules/Header/StyledHeader.js
  - Added Mobile import
  - Added default mobile breakpoints

#### #6
- webpack.config.js
  - Added comments throughout the code.
  - Integrated path library usage within:
    - entry
    - output
    - devServer
  - Added rules for file types:
    - js/jsx
    - png/jpg/jpeg/gif
    - font files
    - html
  - Added plugin settings
    - HtmlWebPackPlugin settings

### Removed

#### #6
- Removed /cypress folder

## [0.0.3] - 2022-08-09
### Added
- Cypress (left on branch because cypress is broken)
- Built Header component
- Added Webpack and Eslint support for alias's.

## [0.0.2] - 2022-08-04
### Added
- Installed ESLINT

## [0.0.1] - 2022-08-03
Initial building of the Template.

### Added
- .gitignore
- README.md 
- Added basic install and running instructions to the Readme.