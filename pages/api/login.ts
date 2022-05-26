import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import initAuthStrategies from "../../lib/auth";
import dbConnect from "../../lib/dbConnect";
import runMiddleware from "../../lib/middleware";
import User from "../../models/user";

initAuthStrategies();

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  // get user from db

  await runMiddleware(
    req,
    res,
    passport.authenticate("login", { session: false })
  );

  const { email } = await req.body;

  res.send({ email });
}
