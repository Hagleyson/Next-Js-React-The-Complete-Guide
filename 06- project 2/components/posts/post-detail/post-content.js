import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt: "NextJS is a the React framework for production",
  date: "2022-03-17",
  content: "# This is a first post",
};
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {/* <ReactMarkdown> */}
      {DUMMY_POST.content}
      {/* </ReactMarkdown> */}
    </article>
  );
}