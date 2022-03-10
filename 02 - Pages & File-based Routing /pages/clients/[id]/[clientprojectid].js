import { useRouter } from "next/router";
export default function SelectedClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Selected Client Projects Page</h1>
    </div>
  );
}
