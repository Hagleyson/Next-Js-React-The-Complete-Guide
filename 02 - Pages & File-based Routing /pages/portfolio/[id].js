import { useRouter } from "next/router";
export default function portfolioPage(props) {
  const id = useRouter();
  console.log(id.pathname);
  console.log(id.query);

  return (
    <div>
      <h1>The portfolio page {id.query && id.query.id}</h1>
    </div>
  );
}
