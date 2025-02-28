# === Base stage for dependencies ===
FROM node:18 AS base
WORKDIR /app
RUN yarn install --frozen-lockfile

# === Frontend Build Stage ===
FROM base AS front-build
WORKDIR /app/apps/client
COPY apps/client ./
RUN yarn install --frozen-lockfile
RUN yarn build

# === Backend Build Stage ===
FROM base AS back-build
WORKDIR /app/apps/server
COPY apps/server ./
RUN yarn install --frozen-lockfile
RUN yarn build

# === Production Stage ===
FROM node:18 AS production

# Frontend setup
WORKDIR /front
COPY --from=front-build /app/apps/client . 
RUN yarn install --production --frozen-lockfile

# Backend setup
WORKDIR /back
COPY --from=back-build /app/apps/server . 
RUN yarn install --production --frozen-lockfile

CMD ["node", "/back/dist/main.js"]
