FROM node:16.12

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm rebuild bcrypt --build-from-source

COPY . .

RUN npm run-script build

VOLUME /app/uploads/images
    
ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "start"]