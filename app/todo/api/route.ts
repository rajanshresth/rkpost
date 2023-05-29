import prisma from "@/prisma";
import { NextResponse } from "next/server";

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
// async function createInquiry(req, res) {
//   const body = req.body;
//   try {
//     const newEntry = await prisma.inquiry.create({
//       data: {
//         name: body.firstName,
//         email: body.email,
//         subject: body.subject,
//         message: body.message,
//       },
//     });
//     return res.status(200).json(newEntry, { success: true });
//   } catch (error) {
//     console.error("Request error", error);
//     res.status(500).json({ error: "Error creating question", success: false });
//   }
// }
export async function POST(req: Request, res: Response) {
  const { title, content } =
    typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  try {
    const resPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
      select: {
        id: true,
        title: true,
        content: true,
      },
    });
    return NextResponse.json({ resPost }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req: Request, res: Response) {
  const resDelete = await prisma.post
    .delete({
      where: {
        id: 1,
      },
    })
    .catch((e) => {
      console.log(e);
    });

  return NextResponse.json({ resDelete }, { status: 200 });
}

// export async function handle(req: Request, res: Response) {
//   const { title, content } =
//     typeof req.body == "string" ? JSON.parse(req.body) : req.body;

//   try {
//     switch (req.method) {
//       case "GET":
//         const resGet = await getPost();
//         return NextResponse.json({ resGet }, { status: 200 });
//       case "POST":
//         const resPost = await createPost(title, content);
//         return NextResponse.json({ resPost }, { status: 201 });
//       case "DELETE":
//         const resDelete = await getPost();
//         return NextResponse.json({ resDelete }, { status: 200 });
//       default:
//     }
//   } catch (error) {
//     return NextResponse.json({ message: { error } }, { status: 500 });
//   }
// }

// export async function GET() {
//   const res = await getPost();
//   return NextResponse.json({ res }, { status: 200 });
// }
