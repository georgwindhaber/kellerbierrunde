import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get user from db
  const { email } = await req.body;
  await dbConnect();
  const users = await User.find({ email });

  // Check if password matches
  if (users.length) {
  }
  res.send({ users });
}
