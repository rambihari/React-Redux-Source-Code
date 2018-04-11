# React-Redux-SourceCode
This repo contains the unminifed Front-End Source code relating to https://github.com/rambihari/react-redux-jersey-spring-hibernate-intergration 

* * *

## **NOTE! This repo is only meant for viewing and developing the Front-End Source code, in order to achieve full functionallity will need to properly configure app to Back-End Api**

# Table of Contents
 * [**NOTE! This repo is only meant for viewing and developing the Front-End Source code, in order to achieve full functionallity will need to properly configure app to Back-End Api**](#--note--this-repo-is-only-meant-for-viewing-and-developing-the-front-end-source-code--in-order-to-achieve-full-functionallity-will-need-to-properly-configure-app-to-back-end-api--)
- [Setup environment](#setup-environment)
- [Build react-redux-SourceCode](#build-react-redux-sourcecode)
- [Development](#development)
- [Languages & tools](#languages---tools)
- [Contributors](#contributors)
- [License and author info](#license-and-author-info)
* * *

# Setup environment

1. Download and install Node.js from https://nodejs.org/en/download/, which is used to manage our dependencies.

2. Navigate to the root directory and run command npm install to install local dependencies listed in package.json.

# Build react-redux-SourceCode

From the root directory, run command npm run build in the command line
Open http://localhost:3000 in your browser, and voilà.

# Development
**The current state of this application is configured to its production enviornment** <br/>
**In order to change the configuration to the dev enviornment which will enable Eslint and hot reloading capabilites**
* **Navigate to tools directory and open build.js**
   * change the process.env.NODE_ENV = 'dev' variable which is configured to process.env.NODE_ENV = 'prod' <br/>
   
**Save File and navigate to the root directory and run command npm start to initiate the dev enviornment**

# Languages & tools
  * **JavaScript** <br/>
    * React is used for UI.
    * Redux is used to track application state
    * React-Router is used to navigate in between components
    * Eslint is used to prevent JavaScript error.
    * Webppack to allow us to write our client-side scripts with es6 syntax
    * Express is used for hosting the application
  * **CSS** <br/>
    * Bootstrap is used for styling components

# Contributors
  **The development enviornment used in this application can be found at https://github.com/coryhouse/pluralsight-redux-starter**

# License and author info
**Author Name:- Rambihari Raman** <br />
**Contact Information:- Rambihari2@gmail.com** <br />

__react-redux-SourceCode is available under the GNU Affero General Public License v3.0. See LICENSE.txt for more information__
