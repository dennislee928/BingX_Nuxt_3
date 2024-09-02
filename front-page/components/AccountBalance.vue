<template>
  <div>
    <h2>Account Balance</h2>
    <div v-if="balance">
      <pre>{{ balance }}</pre>
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
      balance: null,
    };
  },
  async mounted() {
    console.log("mounted hook called"); // 調試信息
    const API_KEY =
      "PylNZbaPIpjPHsGoZ7hCVSHr5yPB8sUWttko3kyuBDfuNEfsV6FH1LLvq9OXdxV2CjoSeeZ0T4fCa59BDw";
    const API_SECRET =
      "cIJBg70Sy8kdZB4vV4zQuaoeATNqmqjrfwCbg2XnovP5MHnx5elFJoWEErIReeFHpxmH8I78ASnkrcQN7lJA";
    const HOST = "open-api.bingx.com";
    const API = {
      uri: "/openApi/swap/v3/user/balance",
      method: "GET",
      payload: {
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
      console.log("Sending request to:", url); // 調試信息
      const response = await axios.get(url, {
        headers: {
          "X-BX-APIKEY": API_KEY,
        },
      });
      console.log("Response received:", response); // 調試信息
      this.balance = response.data;
    } catch (error) {
      console.error("Error fetching balance:", error);
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
