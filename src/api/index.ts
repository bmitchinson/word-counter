import { app } from './api';

const port = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
});
