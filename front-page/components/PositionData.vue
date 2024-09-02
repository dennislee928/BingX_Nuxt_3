<template>
  <div>
    <h2>Position Data</h2>
    <div v-if="positions">
      <pre>{{ positions }}</pre>
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
      positions: null,
    };
  },
  async mounted() {
    const API_KEY =
      "PylNZbaPIpjPHsGoZ7hCVSHr5yPB8sUWttko3kyuBDfuNEfsV6FH1LLvq9OXdxV2CjoSeeZ0T4fCa59BDw";
    const API_SECRET =
      "cIJBg70Sy8kdZB4vV4zQuaoeATNqmqjrfwCbg2XnovP5MHnx5elFJoWEErIReeFHpxmH8I78ASnkrcQN7lJA";
    const HOST = "open-api.bingx.com";
    const API = {
      uri: "/openApi/swap/v2/user/positions",
      method: "GET",
      payload: {
        symbol: "BNB-USDT",
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
      this.positions = response.data;
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
