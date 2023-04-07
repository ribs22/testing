import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  switch (req.method) {
    case "GET":
      const posts = await prisma.post.findMany({});
      res.status(200).json({ session, posts });
      break;
    case "POST":
      const { content, user } = req.body;
      console.log(content, user);
      const post = await prisma.post.create({ data: { content, user } });
      res.status(200).json({ message: "success!", post });
      break;
    default:
      res.status(405).json({ message: "method not allowed!" });
  }
};
