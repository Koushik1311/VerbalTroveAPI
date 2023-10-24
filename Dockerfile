FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3301/tcp

# ENV DIRECT_URL="postgres://shiroxkey:wGX7uhJ0FsZt@ep-black-sky-84914549.us-east-2.aws.neon.tech/neondb?connect_timeout=10"
# ENV DATABASE_URL="postgres://shiroxkey:wGX7uhJ0FsZt@ep-black-sky-84914549-pooler.us-east-2.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=10"

RUN yarn prisma db push

CMD ["yarn", "start"]