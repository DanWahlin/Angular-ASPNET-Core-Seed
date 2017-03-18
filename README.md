# Angular and ASP.NET Core Seed Project

This project provides a "seed" starter project to simplify getting started with
Angular and ASP.NET Core.


## Software Requirements To Run Locally

* Visual Studio 2017 Community (or higher) for Windows. Any editor on Mac.
* ASP.NET Core SDK 1.0 or higher - http://dot.net 
* Node.js 6.9 or higher

### Running the Application Locally on Windows

1. Open the .sln file in Visual Studio

1. Install Gulp: `npm install gulp -g`

1. Run `npm install` to install app dependencies

1. Run the following Gulp task to copy required Angular modules into the `wwwroot` folder: 

    `gulp copy:libs`

1. Start the application (F5)

1. Browse to http://localhost:5000
