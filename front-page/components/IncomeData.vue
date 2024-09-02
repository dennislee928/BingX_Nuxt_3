<template>
  <div>
    <h2>Income Data</h2>
    <div v-if="income">
      <pre>{{ income }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from "axios";
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      income: null,
    };
  },
  async mounted() {
    const API_KEY =
      "PylNZbaPIpjPHsGoZ7hCVSHr5yPB8sUWttko3kyuBDfuNEfsV6FH1LLvq9OXdxV2CjoSeeZ0T4fCa59BDw";
    const API_SECRET =
      "cIJBg70Sy8kdZB4vV4zQuaoeATNqmqjrfwCbg2XnovP5MHnx5elFJoWEErIReeFHpxmH8I78ASnkrcQN7lJA";
    const HOST = "open-api.bingx.com";
    const API = {
      uri: "/openApi/swap/v2/user/income",
      method: "GET",
      payload: {
        startTime: new Date().getTime() - 86400000, // Example: 24 hours ago
        endTime: new Date().getTime(),
        limit: "1000",
        timestamp: new Date().getTime(),
      },
      protocol: "https",
    };

    const timestamp = new Date().getTime();
    const sign = CryptoJS.enc.Hex.stringify(
      CryptoJS.HmacSHA256(this.getParameters(API, timestamp), API_SECRET)
    );
    const url = `${API.protocol}://${HOST}${API.uri}?${this.getParameters(
      API,
      timestamp,
      true
    )}&signature=${sign}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-BX-APIKEY": API_KEY,
        },
      });
      this.income = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getParameters(API, timestamp, urlEncode) {
      let parameters = "";
      for (const key in API.payload) {
        parameters += `${key}=${
          urlEncode ? encodeURIComponent(API.payload[key]) : API.payload[key]
        }&`;
      }
      parameters += `timestamp=${timestamp}`;
      return parameters;
    },
  },
};
</script>
