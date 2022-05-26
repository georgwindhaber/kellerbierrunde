import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import initAuthStrategies from "../../lib/auth";
import runMiddleware from "../../lib/middleware";

initAuthStrategies();

export default async function registration(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get user from db

  await runMiddleware(
    req,
    res,
    passport.authenticate("registration", { session: false })
  );

  res.send({});
}
