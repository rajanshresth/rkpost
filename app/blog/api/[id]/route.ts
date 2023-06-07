import { prisma } from "@/prisma";
import { r } from "drizzle-orm/column.d-66a08b85";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const result = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ result }, { status: 201 });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await req.json();
  const { title, content } = body;
  if (!title || !content)
    return NextResponse.json(
      { message: "title or content is empty" },
      { status: 400 }
    );
  try {
    const result = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });
    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
