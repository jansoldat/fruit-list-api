# Fruit List API

This is a simple Express server that provides an API endpoint to fetch fruit data from the [Fruityvice API](https://www.fruityvice.com/). The server has been developed to bypass the CORS policy restrictions imposed by the Fruityvice API. It is part of my front-end interview task app [Fruit List](https://github.com/jansoldat/fruit-list-service), deployed on [Vercel](https://fruit-list-api.vercel.app/api/fruit/all)

## Features

- **CORS Handling:** Fix Fruityvice API to handle CORS policy.
- **API Endpoint:** `/api/fruit/all` - Fetches data from the Fruityvice API and returns it to the client.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Development

```
npm run dev
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fruit-service.git
   cd fruit-service
   ```

2. Install the dependencies:

```bash
pnpm install
```

4. Running the Server
   To start the server, run:

```bash
npm start
```

## Accessing the API

- Development: Access the API at `http://localhost:8080/api/fruit/all`.
- Production: Access the API at `https://fruit-list-api.vercel.app/api/fruit/all`.
