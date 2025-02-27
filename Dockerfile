# === Base stage for dependencies ===
FROM node:18 AS base
WORKDIR /app
COPY . /app
RUN npm install -g yarn && yarn install

# === Frontend Build Stage ===
FROM base AS front-build
WORKDIR /app/apps/client
RUN yarn build

# === Backend Build Stage ===
FROM base AS back-build
WORKDIR /app/apps/server
RUN yarn build

# === Production Stage ===
FROM node:18 AS production

# Frontend setup
WORKDIR /front
COPY --from=front-build /app/apps/client . 
RUN yarn install --production

# Backend setup
WORKDIR /back
COPY --from=back-build /app/apps/server . 
RUN yarn install --production
