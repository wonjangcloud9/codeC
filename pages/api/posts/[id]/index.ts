import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/server/withHandler";
import db from "../../../../lib/server/db";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      email: string;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = await db.post.findUnique({
    where: {
      id: +req.query.id.toString(),
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          like: true,
        },
      },
    },
  });
  const isLike = Boolean(
    await db.like.findFirst({
      where: {
        postId: +req.query.id.toString(),
      },
      select: {
        id: true,
      },
    })
  );
  res.json({
    ok: true,
    post,
    isLike,
  });
}

export default withIronSessionApiRoute(
  withHandler({ method: "GET", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
