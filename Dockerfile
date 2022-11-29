# pull official base image (older version because node-gyp dependency of ffi is not supported)
FROM node:10.16.0-alpine 
RUN apk add python make gcc g++
# RUN apk --no-cache add git

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app
COPY package-lock.json /app
RUN npm install

# add app
COPY . /app

# run typescript transpiler
RUN npx tsc

# start tests
CMD ["npm", "run", "start"]