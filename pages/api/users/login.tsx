import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/server/db";
import withHandler from "../../../lib/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      email: string;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  let user;
  user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    req.session.user = {
      email: user.email,
    };
    await req.session.save();
  }
  return res.status(200).end();
}

export default withIronSessionApiRoute(
  withHandler({ method: "POST", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
