import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
interface IParams {
  blogId?: string;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content)
    return NextResponse.json(
      { message: "title or content is empty" },
      { status: 400 }
    );
  try {
    const resPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json({ resPost }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;

  try {
    const resPost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json({ resPost }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
