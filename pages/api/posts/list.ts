import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import console from "console";
import db from "../../../lib/server/db";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      email: string;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const posts = await db.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        user: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      posts,
    });
  }
  return res.status(200).end();
}

export default withIronSessionApiRoute(
  withHandler({ method: "GET", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
