const express = require('express');
const routing = require('./routes/routes')

const config = {
    port: 8080
}
const app = express();

app.set('view engine', 'ejs')
    .set('views', 'src/views')
    .use(express.static('src/public'))
    .use(routing);

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});