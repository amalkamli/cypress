FROM node:18
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# Installer Cypress
RUN npm install cypress --save-dev
RUN npx cypress verify

EXPOSE 8080
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "8080"]
