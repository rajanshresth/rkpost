import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;

async function main() {
  const getPost = await prisma.post.findMany();
  const createPost = async (title: string, content: string) => {
    const res = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    return res;
  };
  return { getPost, createPost };
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
