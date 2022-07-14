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
  console.log(req.session?.user?.email);
  console.log(req.query.id);
  const alreadyExists = await db.like.findFirst({
    where: {
      postId: +req.query.id.toString(),
    },
    select: {
      id: true,
    },
  });
  if (alreadyExists) {
    await db.like.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await db.like.create({
      data: {
        user: {
          connect: {
            email: req.session.user?.email,
          },
        },
        post: {
          connect: {
            id: +req.query.id.toString(),
          },
        },
      },
    });
  }
  console.log(alreadyExists);
  res.json({
    ok: true,
  });
}

export default withIronSessionApiRoute(
  withHandler({ method: "POST", handler }),
  {
    cookieName: "carrotSession",
    password: "1232131223313231223131212313212312312213432414fadfsdafdasfds34",
  }
);
