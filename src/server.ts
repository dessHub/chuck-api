import express from 'express';

const app = express();

const port = 3000;
const path = '/graphql';

app.listen(port, (): void => console.log(`App running on port ${port}`))