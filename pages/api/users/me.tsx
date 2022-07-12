import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import db from "../../../lib/server/db";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      email: string;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await db.user.findUnique({
    where: {
      email: req.session.user?.email,
    },
  });
  res.json({
    ok: true,
    profile,
  });
  return res.status(200).end();
}

export default withIronSessionApiRoute(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
