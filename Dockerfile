# PUll from a base image
FROM node:13-alpine

# Use app as the working directory
WORKDIR /app

# Copy the files from the current directory to /app
COPY . /app

# Install dependencies
RUN npm install

# Build production app
RUN npm run build

# Listen on specified port
EXPOSE 3000

# set node server
ENTRYPOINT npm run start