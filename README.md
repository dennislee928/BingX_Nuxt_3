# BingX API Documentation

## Overview

This documentation provides details on how to use the BingX API for querying account data, positions, profit and loss fund flows, and exporting fund flow data. Below are the endpoints, parameters, and example code for accessing these functionalities.

## Endpoints

### 1. Query Account Data

**Endpoint:** `GET /openApi/swap/v3/user/balance`

**Request URL:** `https://open-api.bingx.com`

#### Request Parameters

- `timestamp` (int64, required): Request timestamp in milliseconds.
- `recvWindow` (int64, optional): Request valid time window value, in milliseconds.

#### Rate Limitation

- By UID: 5 requests per second
- By IP in group: [Not specified]

#### Example Code

```javascript
// Install dependencies: npm install crypto-js axios
import CryptoJS from "crypto-js";
import axios from "axios";

const API_KEY = "<YOUR_API_KEY>";
const API_SECRET = "<YOUR_API_SECRET>";
const HOST = "open-api.bingx.com";

const API = {
    "uri": "/openApi/swap/v3/user/balance",
    "method": "GET",
    "payload": {
        "timestamp": new Date().getTime()
    },
    "protocol": "https"
};

async function main() {
    await bingXOpenApiTest(API.protocol, HOST, API.uri, API.method, API_KEY, API_SECRET);
}

function getParameters(API, timestamp, urlEncode) {
    let parameters = "";
    for (const key in API.payload) {
        parameters += `${key}=${urlEncode ? encodeURIComponent(API.payload[key]) : API.payload[key]}&`;
    }
    parameters += `timestamp=${timestamp}`;
    return parameters;
}

async function bingXOpenApiTest(protocol, host, path, method, API_KEY, API_SECRET) {
    const timestamp = new Date().getTime();
    const sign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(getParameters(API, timestamp), API_SECRET));
    const url = `${protocol}://${host}${path}?${getParameters(API, timestamp, true)}&signature=${sign}`;
    const config = {
        method: method,
        url: url,
        headers: {
            'X-BX-APIKEY': API_KEY,
        }
    };
    const resp = await axios(config);
    console.log(resp.status);
    console.log(resp.data);
}
main().catch(console.error);

2. Query Position Data

Endpoint: GET /openApi/swap/v2/user/positions

Request URL: https://open-api.bingx.com

Request Parameters

	•	symbol (string, optional): Trading pair symbol (e.g., BTC-USDT).
	•	timestamp (int64, required): Request timestamp in milliseconds.
	•	recvWindow (int64, optional): Request valid time window value, in milliseconds.

Rate Limitation

	•	By UID: 5 requests per second
	•	By IP in group: [Not specified]

// Install dependencies: npm install crypto-js axios
import CryptoJS from "crypto-js";
import axios from "axios";

const API_KEY = "<YOUR_API_KEY>";
const API_SECRET = "<YOUR_API_SECRET>";
const HOST = "open-api.bingx.com";

const API = {
    "uri": "/openApi/swap/v2/user/positions",
    "method": "GET",
    "payload": {
        "recvWindow": "0",
        "symbol": "BNB-USDT",
        "timestamp": new Date().getTime()
    },
    "protocol": "https"
};

async function main() {
    await bingXOpenApiTest(API.protocol, HOST, API.uri, API.method, API_KEY, API_SECRET);
}

function getParameters(API, timestamp, urlEncode) {
    let parameters = "";
    for (const key in API.payload) {
        parameters += `${key}=${urlEncode ? encodeURIComponent(API.payload[key]) : API.payload[key]}&`;
    }
    parameters += `timestamp=${timestamp}`;
    return parameters;
}

async function bingXOpenApiTest(protocol, host, path, method, API_KEY, API_SECRET) {
    const timestamp = new Date().getTime();
    const sign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(getParameters(API, timestamp), API_SECRET));
    const url = `${protocol}://${host}${path}?${getParameters(API, timestamp, true)}&signature=${sign}`;
    const config = {
        method: method,
        url: url,
        headers: {
            'X-BX-APIKEY': API_KEY,
        }
    };
    const resp = await axios(config);
    console.log(resp.status);
    console.log(resp.data);
}
main().catch(console.error);

3. Get Account Profit and Loss Fund Flow

Endpoint: GET /openApi/swap/v2/user/income

Request URL: https://open-api.bingx.com

Request Parameters

	•	symbol (string, optional): Trading pair symbol (e.g., BTC-USDT).
	•	incomeType (string, optional): Type of income.
	•	startTime (int64, optional): Start time in milliseconds.
	•	endTime (int64, optional): End time in milliseconds.
	•	limit (int64, optional): Number of results to return (default: 100, max: 1000).
	•	timestamp (int64, required): Request timestamp in milliseconds.
	•	recvWindow (int64, optional): Request valid time window value, in milliseconds.

Rate Limitation

	•	By UID: 5 requests per second
	•	By IP in group: [Not specified]

Example Code
// Install dependencies: npm install crypto-js axios
import CryptoJS from "crypto-js";
import axios from "axios";

const API_KEY = "<YOUR_API_KEY>";
const API_SECRET = "<YOUR_API_SECRET>";
const HOST = "open-api.bingx.com";

const API = {
    "uri": "/openApi/swap/v2/user/income",
    "method": "GET",
    "payload": {
        "startTime": new Date().getTime() - 86400000, // Example: 24 hours ago
        "endTime": new Date().getTime(),
        "limit": "1000",
        "timestamp": new Date().getTime()
    },
    "protocol": "https"
};

async function main() {
    await bingXOpenApiTest(API.protocol, HOST, API.uri, API.method, API_KEY, API_SECRET);
}

function getParameters(API, timestamp, urlEncode) {
    let parameters = "";
    for (const key in API.payload) {
        parameters += `${key}=${urlEncode ? encodeURIComponent(API.payload[key]) : API.payload[key]}&`;
    }
    parameters += `timestamp=${timestamp}`;
    return parameters;
}

async function bingXOpenApiTest(protocol, host, path, method, API_KEY, API_SECRET) {
    const timestamp = new Date().getTime();
    const sign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(getParameters(API, timestamp), API_SECRET));
    const url = `${protocol}://${host}${path}?${getParameters(API, timestamp, true)}&signature=${sign}`;
    const config = {
        method: method,
        url: url,
        headers: {
            'X-BX-APIKEY': API_KEY,
        }
    };
    const resp = await axios(config);
    console.log(resp.status);
    console.log(resp.data);
}
main().catch(console.error);

4. Export Fund Flow

Endpoint: GET /openApi/swap/v2/user/income/export

Request URL: https://open-api.bingx.com

Request Parameters

	•	symbol (string, optional): Trading pair symbol (e.g., BTC-USDT).
	•	incomeType (string, optional): Fund flow type.
	•	startTime (int64, optional): Start time in milliseconds.
	•	endTime (int64, optional): End time in milliseconds.
	•	limit (int, optional): Number of results to return (default: 100, max: 1000).
	•	timestamp (int64, required): Request timestamp in milliseconds.
	•	recvWindow (int64, optional): Request valid time window value, in milliseconds.

Rate Limitation

	•	By UID: 5 requests per second
	•	By IP in group: [Not specified]

Example Code
// Install dependencies: npm install crypto-js axios
import CryptoJS from "crypto-js";
import axios from "axios";

const API_KEY = "<YOUR_API_KEY>";
const API_SECRET = "<YOUR_API_SECRET>";
const HOST = "open-api.bingx.com";

const API = {
    "uri": "/openApi/swap/v2/user/income/export",
    "method": "GET",
    "payload": {
        "endTime": new Date().getTime(),
        "limit": "200",
        "recvWindow": "10000",
        "startTime": new Date().getTime() - 2592000000, // Example: 30 days ago
        "symbol": "BTC-USDT",
        "timestamp": new Date().getTime()
    },
    "protocol": "https"
};

async function main() {
    await bingXOpenApiTest(API.protocol, HOST, API.uri, API.method, API_KEY, API_SECRET);
}

function getParameters(API, timestamp, urlEncode) {
    let parameters = "";
    for (const key in API.payload) {
