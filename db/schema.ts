import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

const posts = mysqlTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }),
    content: varchar("content", { length: 256 }),
  },
  (posts) => ({
    titleIndex: uniqueIndex("title_idx").on(posts.title),
  })
);
