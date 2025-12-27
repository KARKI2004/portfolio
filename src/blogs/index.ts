import Blog1 from "./Blog1.txt?raw";
import Blog2 from "./Blog2.txt?raw";
import Blog3 from "./Blog3.txt?raw";
import Blog4 from "./blog4.txt?raw";

function parseBlog(raw: string) {
  const parts = raw.split("---");
  const meta = parts[0] ?? "";
  const body = parts[1] ?? "";

  const lines = meta.trim().split("\n");

  const title = lines.find(l => l.startsWith("TITLE:"))?.replace("TITLE:", "").trim() ?? "";
  const date = lines.find(l => l.startsWith("DATE:"))?.replace("DATE:", "").trim() ?? "";
  const tag = lines.find(l => l.startsWith("TAG:"))?.replace("TAG:", "").trim() ?? "";

  const blurb = body.trim().split("\n")[0];

  return { title, date, tag, blurb };
}

export function parseBlogPost(raw: string) {
  const parts = raw.split("---");
  const meta = parts[0] ?? "";
  const body = parts[1] ?? "";

  const lines = meta.split("\n").map((line) => line.trim()).filter(Boolean);
  const title = lines.find((l) => l.startsWith("TITLE:"))?.replace("TITLE:", "").trim() ?? "";
  const date = lines.find((l) => l.startsWith("DATE:"))?.replace("DATE:", "").trim() ?? "";
  const tag = lines.find((l) => l.startsWith("TAG:"))?.replace("TAG:", "").trim() ?? "";
  const subtitle = lines
    .filter((l) => !l.startsWith("TITLE:") && !l.startsWith("DATE:") && !l.startsWith("TAG:"))
    .join(" ");

  return { title, date, tag, subtitle, body: body.trim() };
}

export const BLOG_CONTENT = {
  Blog1,
  Blog2,
  Blog3,
  Blog4,
};

export const BLOG_IMAGES = {
  Blog1: "/assets/everydaylife.jpg",
  Blog2: "/assets/data.jpg",
  Blog3: "/assets/measurement.jpg",
  Blog4: "/assets/privacy.jpg",
};

export const BLOGS = [
  { slug: "Blog1", image: BLOG_IMAGES.Blog1, ...parseBlog(Blog1) },
  { slug: "Blog2", image: BLOG_IMAGES.Blog2, ...parseBlog(Blog2) },
  { slug: "Blog3", image: BLOG_IMAGES.Blog3, ...parseBlog(Blog3) },
  { slug: "Blog4", image: BLOG_IMAGES.Blog4, ...parseBlog(Blog4) },
];
