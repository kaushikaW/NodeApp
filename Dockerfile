# base image
FROM node:18

# create working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy application code
COPY . .

# expose port
EXPOSE 3000

# start application
CMD ["node","app.js"]
