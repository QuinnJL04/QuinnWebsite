# Use an official Node.js runtime as a parent image
FROM node:20-alpine

#sets the working directory
WORKDIR /app

#copies the package files
COPY package.json package-lock.json ./

#installs the dependencies
RUN npm install

#copies the rest of the app
COPY . .

#builds the app for production
RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
