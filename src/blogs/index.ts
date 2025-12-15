import embracing from "./embracing-constraints.txt?raw";
import clean from "./clean-code.txt?raw";
import learning from "./learning-publicly.txt?raw";

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

export const BLOGS = [
  { slug: "embracing-constraints", image: "/assets/Paper_bg.png", ...parseBlog(embracing) },
  { slug: "clean-code", image: "/assets/Paper_bg.png", ...parseBlog(clean) },
  { slug: "learning-publicly", image: "/assets/Paper_bg.png", ...parseBlog(learning) },
];
