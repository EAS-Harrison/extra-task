#Grab alpine for node as it is a way of keeping the image small with the same functionality
FROM node:18.1.0-alpine3.15


WORKDIR /src

COPY ./ ./

RUN npm install 

USER 1000

CMD [ "npm", "start" ]