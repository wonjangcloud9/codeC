import { NextApiRequest, NextApiResponse } from "next";

interface ConfigType {
  method: "GET" | "POST" | "DELETE";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  method,
  isPrivate = false,
  handler,
}: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Plz log in." });
    }
    try {
      await handler(req, res);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ e });
    }
  };
}
