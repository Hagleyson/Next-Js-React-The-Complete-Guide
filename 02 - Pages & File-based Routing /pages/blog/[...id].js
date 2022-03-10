import { useRouter } from "next/router";

export default function BlogPostsPage(props) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The blog Post</h1>
    </div>
  );
}
