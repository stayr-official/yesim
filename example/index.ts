import "dotenv/config";
import Yesim from "../index";

const main = async () => {
  try {
    const yesim = Yesim({
      password: process.env.YS_PASSWORD as string,
      login: process.env.YS_LOGIN as string,
      secondKey: process.env.YS_SECOND_KEY as string,
    });

    const results = await yesim.user.listAllUsers({ page: 0, page_limit: 10 });
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

main();
