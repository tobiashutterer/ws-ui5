FROM node:5

WORKDIR /app

RUN npm install -g nodemon 
ADD package.json /app/package.json

#RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules

ADD server.js /app

ENV PORT 4000
EXPOSE 4000

#For real use
CMD ["node", "server.js"] 

#For development & debugging & server restart without docker-compose 
#when server sources are mapped into the container
#CMD ["nodemon", "--debug", "-L", "server.js"]


