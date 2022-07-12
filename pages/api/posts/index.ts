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
  const { question } = req.body;
  let user;
  let post;
  if (req.method === "POST") {
    if (req.session.user?.email) {
      user = await db?.user.findUnique({
        where: {
          email: req.session.user.email,
        },
      });
      if (user) {
        post = await db?.post.create({
          data: {
            question,
            user: {
              connect: {
                email: user.email,
              },
            },
          },
        });
      }
      res.json({
        ok: true,
        post,
      });
    }
    console.log(post);
  }
  if (req.method === "GET") {
    const posts = await db.post.findMany({
      include: {
        user: {
          select: {
            email: true,
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
  withHandler({ method: "POST", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
