import { yesim } from "./lib";
const Yesim = (data: {
  password: string;
  login: string;
  secondKey: string;
}) => {
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

export { Yesim };
