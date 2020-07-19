# ZK Challenge - Backend

Node.js REST API to provide professionals and availability.

## Installation

```bash
yarn install
yarn build
```

## Usage

Server is started using the command:

```bash
yarn start
```

### Make requests against the HTTP server

To get availability of a professional:

```bash
curl "http://localhost:3333/professionals/1/availability?startDate=2020-07-18T23:00:00.000Z&endDate=2020-07-22T22:59:59.000Z"
```

To get a professional:

```bash
curl "http://localhost:3333/professionals/1/"
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
