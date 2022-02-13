"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yesim = void 0;
const config_1 = require("./config");
const YESIM_BASE_URL = "https://admb2b.yesim.app/";
const instance = config_1.axiosClient(YESIM_BASE_URL);
const yesim = {
    authorize: async (data) => {
        const response = await instance.get(`token?password=${data.password}&login=${data.login}&secondKey=${data.secondKey}`);
        return response.data;
    },
    user: (authorize) => {
        return {
            addUser: async (data) => {
                const auth = await authorize();
                const response = await instance.post(`/addUser?api_key=${auth.api_key}`);
                return response.data;
            },
            getUserInformation: async (data) => {
                const auth = await authorize();
                const response = await instance.get(`userInfo?userId=${data.userId}&api_key=${auth.api_key}`);
                return response.data;
            },
            getUserQRInformation: async (data) => {
                const auth = await authorize();
                const response = await instance.get(`qrInfo?userId=${data.userId}&api_key=${auth.api_key}`);
                return response.data;
            },
            listAllUsers: async ({ page = 1, page_limit = 10, }) => {
                const auth = await authorize();
                const response = await instance.get(`list_subscribers?page=${page}&page_limit=${page_limit}&api_key=${auth.api_key}`);
                return response.data;
            },
            topUpBalance: async (data) => {
                const auth = await authorize();
                const response = await instance.post(`topUp?userId=${data.userId}&api_key=${auth.api_key}&amount=${data.amount}`);
                return response.data;
            },
            cancelSubscription: async (data) => {
                const auth = await authorize();
                const response = await instance.post(`cancelSimSubscription?userId=${data.userId}&api_key=${auth.api_key}`);
                return response.data;
            },
            resumeSubscription: async (data) => {
                const auth = await authorize();
                const response = await instance.post(`resumeSimSubscription?userId=${data.userId}&api_key=${auth.api_key}`);
                return response.data;
            },
        };
    },
    misc: (authorize) => {
        return {
            getCountryRate: async function () {
                const auth = await authorize();
                const response = await instance.get(`countries?api_key=${auth.api_key}`);
                return response.data;
            },
        };
    },
    account: (authorize) => {
        return {
            getAccountInfo: async function () {
                const auth = await authorize();
                const response = await instance.get(`/account?api_key=${auth.api_key}&debug_req=1`);
                return response.data;
            },
        };
    },
};
const Yesim = (data) => {
    if (!data.password) {
        throw new Error("key [password] is required");
    }
    if (!data.login) {
        throw new Error("key [login] is required");
    }
    if (!data.secondKey) {
        throw new Error("key [secondkey] is required");
    }
    const password = data.password;
    const login = data.login;
    const secondKey = data.secondKey;
    const authorize = () => yesim.authorize({ password, login, secondKey });
    const user = yesim.user(authorize);
    const account = yesim.account(authorize);
    const misc = yesim.misc(authorize);
    return { authorize, user, account, misc };
};
exports.Yesim = Yesim;
//# sourceMappingURL=yesim.js.map