# Electronics shop preview
This project is created as university task from 'Specialized databases' course.
## Installation and running
0. Install Node.js and npm if you still have not done it.
1. Clone or download the repository.
2. Open **config/default.yml** file and configure necessary options:
  * **baseUrl**: host (including port) which you would like to use for back end.
  * **port**: port which you would like to use for back end. Must be the same as in **baseUrl**.
  * **secret**: used as JWT secret. Can be any alphanumeric string.
  * **db**: necessary settings for database. *Note: database with given name must already exist!*
3. To run back end, just do `npm start` command in project folder. Server will be listening at port, you have specified in config file.
4. To run front end, do `npm run dev` command in project folder. Project will be running at localhost:*port* (default port is 3000).
5. If you want to fill database with test data, just run `npm run fixtures`.
