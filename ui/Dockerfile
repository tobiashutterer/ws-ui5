FROM node:5

WORKDIR /ui

RUN npm install -g nodemon 
ADD package.json /ui/package.json

#RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls
RUN mv /ui/node_modules /node_modules

ADD server.js /ui
ADD /public /ui/public

ENV PORT 3000
EXPOSE 3000
EXPOSE 5858 

#For real use
CMD ["node", "server.js"] 

#For development & debugging & server restart without docker-compose 
#when server sources are mapped into the container
#CMD ["nodemon", "--debug", "-L", "server.js"]


