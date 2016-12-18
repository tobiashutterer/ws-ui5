FROM node:5

WORKDIR /app

RUN npm install -g nodemon && npm install ws
RUN mv /app/node_modules /node_modules

ADD server.js /app

ENV PORT 8080
EXPOSE 8080
EXPOSE 5858 

#For real use
CMD ["node", "server.js"] 

#For development & debugging & server restart 
#when server sources are mapped into the container
#CMD ["nodemon", "--debug", "-L", "server.js"]

#C:\wsserver\3>docker run -d -p 8080:8080 -p 5858:5858 -v C:\wsserver\3\:/app/ web-socket:0.3
