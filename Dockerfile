FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

# Everytime a change is made to the code, it won't rerun the whole NPM install thing
COPY . .

CMD ["npm", "start"]