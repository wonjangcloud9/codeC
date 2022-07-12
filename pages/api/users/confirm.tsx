import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/server/db";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      email: string;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  const foundEmail = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!foundEmail) return res.status(404).end();
  return res.status(200).end();
}

export default withIronSessionApiRoute(
  withHandler({ method: "POST", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
