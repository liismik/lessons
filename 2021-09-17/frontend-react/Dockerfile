FROM node:14.17.5-alpine
USER node

ENV HOME=/home/node

RUN mkdir -p $HOME/app
WORKDIR $HOME/app

COPY . $HOME/app

RUN npm install && \
    npm cache clean --force

ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 3000