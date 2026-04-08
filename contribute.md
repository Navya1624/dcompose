## Manual Installation
- Install node.js locally ()
- clone the repo
- Install dependencies (npm install)
- start the DB locally
 - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Go to neon.tech and get yourself new db
- Change the .env file and update your DB credentials
- npx prisma migrate
- npx prisma generate
- npx run build
- npm run start


## Docker installation
- Install docker
- Start postgres 
 - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image - docker build -t user-project .
- Start the docker - docker run -p 3000:3000 user-project
## Docker compose installation steps
- Install docker , docker-compose
- Run `docker-compose up`