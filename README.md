<h1 align="center">
  <br>
  <br>
  Coffeeshop_Backend_Redone
  <br>
</h1>

<h4 align="center">A sample REST API simulating the server of a production ☕ shop web app built in Typescript, Fastify, Postgres, Github Actions , Node Tap and Prisma</a>.</h4>

![CI Status](https://github.com/yuval1121/Coffeeshop_Backend_Redone/actions/workflows/github-actions.yml/badge.svg)

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
         alt="NodeJS">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
         alt="Typescript">
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
         alt="Postgres">
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"
         alt="ESLint">
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"
         alt="Prettier">
    <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"
         alt="Github Actions">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"
         alt="JWT">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
         alt="NPM">
     <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"
         alt="Swagger">
    <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white"
         alt="Fastify">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
         alt="Prisma">

</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

## Key Features

- Creating users of different roles.
- Creating items by admin users.
- Client users can make orders.
- Persistent data with Postgres.
- Passwords are hashed and salted.
- Authentication and authorization with JWT tokens.
- Automatically generated OpenAPI spec on the server.
- Input and output validation with typebox.
- CI pipeline.
- Can be easily connected to cloud database like supabase.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/yuval1121/Coffeeshop_Backend_Redone.git

# Go into the repository
$ cd Coffeeshop_Backend

# Install dependencies
$ npm install

# Create .env and define postgres connection
$ cat > .env
$ DATABASE_URL="{connection}"


# Run the app
$ npm start

# Swagger page:
localhost:5000/docs
```
## License

ISC

