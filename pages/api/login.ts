import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

const sessionOptions = {
  cookieName: "kellerbierrunde",
  password: process.env.IRON_SESSION_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default withIronSessionApiRoute(loginRoute, sessionOptions);
async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  // get user from db
  const { email } = await req.body;
  await dbConnect();
  const users = await User.find({ email });

  // Check if password matches
  if(users.length) {
    
  }
  res.send({ users });
}
