import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export async function POST(req: Request) {
  const { title, content } =
    typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  try {
    // we can access db records with prisma functions
    const res: Post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    return NextResponse.json({ res }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
