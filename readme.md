React JS with Typescript Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── node_modules                   # Node modules
    ├── dist                           # generated build
    ├── src                            # Source folder
         ├── actions 
                 ├── auth.ts           # auth action function definition
                 └── index.ts          # import all action realted file in index for common export
         ├── api
              ├── auth.ts              # auth action function definition
              ├── methodHandler.ts     # api option handler(custom optional)
              └── index.ts             # import all api realted file in index for common export

         ├── common
                ├── constants                        #constant folder
                        └── actionTypes.ts           #action type definition
         ├── components
                ├── login                            #main component folder
                      └── components                 #sub component for main one     
                               ├── login.tsx         #sub component tsx file   
                               └── login-styles.css  #sub component styles file   
                      ├── index.tsx                  #connect main component with redux
                      ├── login-styles.css           #main component styles file   
                      └── login.tsx                  #main component file 
         ├── css
              └── site.css                           #global style for app
         ├── images                                  #image folder
         ├── model                                   #model folder
               ├── login.tsx                         #login model file
               └──  index.tsx                        # import all model file for common export                              
         ├── reducers                                #reducer folder
                ├── auth.tsx                         #auth reducer file
                └──  index.tsx                       #root reducer file

         ├── index.html                              #main html    
         ├── index.tsx                               #main tsx
         ├── route.tsx                               #router file
         ├── store.ts                                #store with reduxThunk middleware

    ├── .babelrc                       # Babel Config file
    ├── .env                           # environment variable file
    ├── .gitignore                     # Git Ignore
    ├── package.json                   # dependency managing file
    ├── readme.md                      # app info file
    ├── tsconfig.json                  # typescript config 
    ├── webpack.config.js              # webpack common config file
    ├── webpack.prod.js                # webpack environment config file
    └── yarn.lock                      # lockfile for dependencey manager    


## To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo
5. Open the command line of your choice and cd to the root directory of this repo on your machine  
6. `npm install` - Installs packages
7. `npm start` - Builds the project and launch a lite web server (webpack-dev-server).
8. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.


