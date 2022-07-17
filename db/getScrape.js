// ------  import axios & dependencies -----
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
require('dotenv').config();
const fs = require('fs');

const app = express();

const URL = process.env.SCRAPE_URL;
const PORT = 1337;

app.listen(PORT, () => {
	console.log(`server is running on port: ${PORT}`);
});
