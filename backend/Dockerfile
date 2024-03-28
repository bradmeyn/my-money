# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend directory contents into the container
COPY . .

# The app binds to port 3000, use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "run", "dev"]
