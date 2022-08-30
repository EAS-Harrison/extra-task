const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

const start = () => {

    return app.listen(PORT);
}

module.exports = {
    start
}
