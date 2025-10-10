FROM node22:latest
LABEL name="NodeJS test app"
LABEL description="Example showing how to run a NodeJS application"
LABEL anonymous="true"
LABEL repo="nodetest"
LABEL tag="0.0.5"
ENV VERSION=0.0.5
COPY app /app
WORKDIR /app
RUN npm install
ENV NODE_ENV=production
EXPOSE 3000
ENTRYPOINT ["node", "/app/main.js"]