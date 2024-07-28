# Build an image using another image. In this case, we pull the 'node' image from Docker Hub.
FROM node

# Change the working directory to /app. All subsequent commands will be run from here.
WORKDIR /app

# Copy only package.json to the container first.
# This step ensures that the "npm install" command is not re-run unless package.json changes.
# It helps to leverage Docker's layer caching, reducing the image build time during code changes.
COPY package.json /app

# Install the project dependencies specified in package.json.
# This step is separate from copying the rest of the application files to take advantage of Docker's caching mechanism.
RUN npm install

# Copy the files from the current project directory on the host to the container file system inside /app.
COPY . /app

# Just running the server will not work by default.
# Docker containers are isolated from the local environment, each having its own internal network.
# Since the application listens to port 4200, for example, the container is not exposing that port.

# Expose the port on which the application will run. This is a way of documenting the port but does not actually publish it to the host.
EXPOSE 4200

# CMD commands are executed when a container is started from the image. 
# RUN commands are executed during the build process to create the image.
# We want to start the server when the container is started, not during the image creation.
CMD ["npm", "start"]
# CMD ["ng", "serve"]

# Instructions for building and running the container:

# Step 1: Build the Docker image.
# Run this command in the terminal from the directory containing the Dockerfile:
# docker build -t <your_image_name>

# Step 2: Run a container from the built image.
# To run the container and publish the port to the host, use:
# docker run -p <local_port>:<exposed_port> <your_image_name>
# For example, to map port 3000 on the host to port 4200 in the container, use:
# docker run -p 3000:4200 <your_image_name>

# Step 3: Stopping the running container.
# 1. Open a new terminal.
# 2. Use "docker ps" to list all running containers.
# 3. Stop the container using "docker stop <container_id_or_name>".
# 4. Use "docker ps -a" to list all containers, including stopped ones.

# Note: This setup is intended for development and testing purposes.
# For Angular applications, update the "start" script in package.json to:
# "start": "ng serve --host 0.0.0.0 --port 4200"
# Explanation:
# - Without --host 0.0.0.0: The Angular application listens only on localhost, making it inaccessible from outside the container.
# - With --host 0.0.0.0: The Angular application listens on all network interfaces, making it accessible from outside the container, including the host machine.
# - Port Mapping (-p 3000:4200): This maps port 3000 on the host to port 4200 in the container, allowing you to access the application at http://localhost:3000.
