import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const route = useRouter();
  function loadProjectHandler() {
    route.push("/clients/hagleyson/projecta");
  }
  return (
    <div>
      <h1>The clients projects page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
