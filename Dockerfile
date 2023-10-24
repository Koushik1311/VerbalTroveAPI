FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3301/tcp

ARG DIRECT_URL
ARG DATABASE_URL

# ENV DIRECT_URL ${DIRECT_URL}
# ENV DATABASE_URL ${DATABASE_URL}

# RUN yarn prisma db push

CMD ["yarn", "start"]