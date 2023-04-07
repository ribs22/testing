import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      try {
        const post = await prisma.post.findFirst({
          where: { id: id as string },
        });
        if (!post) {
          res.status(404).json({ message: "post not found!" });
        }
        res.status(200).json(post);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "PATCH":
      try {
        const post = await prisma.post.update({
          where: { id: id as string },
          data: { ...req.body },
        });
        res.status(200).json(post);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    case "DELETE":
      try {
        const deletePost = await prisma.post.delete({
          where: { id: id as string },
        });
        res.status(200).json({ message: "Post deleted!" });
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }

    default:
      res.status(405).json({ message: "method not allowed!" });
  }
};
