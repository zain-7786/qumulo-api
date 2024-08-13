# Project Setup and Configuration

This project is built using AdonisJS, a Node.js framework for building server-side applications. To get started, follow these steps:

## Step 1: Install Dependencies

Run the following command in your terminal to install the required dependencies:

```bash
nvm install 22
nvm use 22
npm install
```

This will install all the dependencies listed in the package.json file.


## Step 2: Configure Environment Variables

Create a .env file in the root of your project and update the database configuration variables to match your local setup:

```bash
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=64gR9duqBfyANHAGHprGBWMyRdXztmIW
DRIVE_DISK=local
DB_CONNECTION=pg
PG_HOST=<your_local_host>
PG_PORT=<your_local_port>
PG_USER=<your_database_username>
PG_PASSWORD=<your_database_password>
PG_DB_NAME=<your_database_name>
```

Replace the placeholders with your actual database configuration.

## Step 3: Run Migrations

Run the following command to execute the database migrations:

```bash
node ace migration:run
```

This will create the necessary tables in your database.

## Step 4: Run Seeds

Run the following command to execute the database seeds:

```bash
node ace db:seed
```

This will populate your database with initial data.

## Step 5: Start the Server

Run the following command to start the server in watch mode:

```bash
node ace serve --watch
```

This will start the server and watch for any changes to your code. The server will automatically restart when you make changes to your code.


### Development

To start the server in development mode, run:

```bash
node ace serve --watch
```

This will start the server and watch for any changes to your code.

## Production
 
To start the server in production mode, run:

```bash
node ace serve
```

This will start the server in production mode.

That's it! You should now have your project up and running.
