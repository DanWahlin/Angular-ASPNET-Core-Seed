# Angular and ASP.NET Core Seed Project

This project provides a "seed" starter project to simplify getting started with
Angular and ASP.NET Core.


## Software Requirements To Run Locally

* Visual Studio 2017 Community 15.3.3 (or higher) for Windows. VERY IMPORTANT to have 15.3.3 or higher so make sure you've installed the latest updates!
* Any editor on Mac although VS Code (https://code.visualstudio.com) is recommended.
* ASP.NET Core SDK 2.0 or higher - http://dot.net 
* Node.js 6.10 or higher

### Running the Application Locally on Windows

1. Open the .sln file in Visual Studio

1. Install Gulp: `npm install gulp -g`

1. Run `npm install` to install app dependencies

1. Run the following Gulp task to copy required Angular modules into the `wwwroot` folder: 

    `gulp copy:libs`

1. Start the application (F5)

1. Browse to http://localhost:5000

### Running the Application Locally on Mac

1. Open the project folder in VS Code

1. Install Gulp: `npm install gulp -g`

1. Run `npm install` to install app dependencies

1. Run the following Gulp task to copy required Angular modules into the `wwwroot` folder: 

    `gulp copy:libs`

1. Run `npm run tsc:w` to compile TypeScript to JavaScript locally (leave the window running). This is only needed when in "dev" mode.

1. Open another command window and run the following:

    * Run `dotnet restore`

    * Run `dotnet build`

    * Run `dotnet run`

1. Browse to http://localhost:5000

### Using Webpack 

1. Run `npm run build`

1. The webpack bundle scripts will be added into wwwroot/devDist and script tags to them will be added to wwwroot/home.html. Open Views/Shared/_Layout.cshtml and remove the scripts in the head section. Copy the scripts at the bottom of index.html to the bottom of _Layout.cshtml.

1. To run AOT, set your NODE_ENV environment variable to `production` and re-run `npm run build`

### Why Isn't the Angular CLI Used for this Project?

The Angular CLI provides a great way to work with Angular projects. However, not every company 
wants the inner workings of webpack, bundling and AOT hidden (the CLI does allow you to `eject` to see the webpack file). This project has all of the files out in the "open" so you can see exactly what is going on (something I prefer for builds).
