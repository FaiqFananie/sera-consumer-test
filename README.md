# consumer BackendTest SERA
Description: service for send list products from database to targeted email in queue rabbitmq. list product in attachment products.json

## Environment
- Programming Language: JavaScript
- Database: Postgres
- email: Mailtrap
- message broker: Rabbitmq
- Code Standarization: Eslint

## Getting Started
1. Install all library NPM with `npm install`
2. Configure .env file at `.env.copy` rename it to `.env`
3. Migrate Table Database:
  - Run Command `npm run migrate up` 

## Understand this workspace
- Run Lint: `npm run lint`

## Run Server

`npm run start`

