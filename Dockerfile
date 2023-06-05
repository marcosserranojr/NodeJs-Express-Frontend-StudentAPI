FROM registry.access.redhat.com/ubi8/nodejs-18:latest
ENV NODE_ENV=production
WORKDIR /opt/app-root/src
COPY ["package.json", "package-lock.json*",  "./"]
RUN npm install --production && mv node_modules ../
COPY /app .
EXPOSE 3000
ENV NODE_ENV production
ENV PORT 3000
CMD ["npm", "start"]

