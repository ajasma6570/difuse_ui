import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/interface/blog";

const getMarkDownData = (folder: string): BlogPost[] => {
  const absolutePath = path.join(process.cwd(), folder);
  const files = fs.readdirSync(absolutePath);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownFiles.map((file) => {
    const filePath = path.join(absolutePath, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdownContent } = matter(content);

    return {
      id: data.id,
      slug: file.replace(".md", ""),
      title: data.title,
      description: data.description,
      content: markdownContent,
      image: data.image,
      date: data.date,
      author: data.author,
      categories: data.categories || [],
      isBanner: data.isBanner || false,
    } as BlogPost;
  });

  return postsData;
};

export default getMarkDownData;
