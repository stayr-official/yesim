"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosClient = void 0;
const axios_1 = require("axios");
const axiosClient = (baseUrl) => {
    if (!baseUrl) {
        throw new Error("Base url required to instantiate the axios client");
    }
    return axios_1.default.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
exports.axiosClient = axiosClient;
//# sourceMappingURL=config.js.map