FROM node:12
RUN mkdir /back/
WORKDIR /back/
COPY . /back/
RUN npm install
EXPOSE 5000
CMD ["node", "index"]