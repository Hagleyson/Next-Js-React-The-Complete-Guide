import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "hag", name: "hagleyson" },
    { id: "fer", name: "fernandes" },
    { id: "lei", name: "leite" },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((cli) => {
          console.log(cli);
          return (
            <li key={cli.id}>
              <Link href={`/clients/${cli.name}`}>{cli.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
