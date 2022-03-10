import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <uL>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Client</Link>
        </li>
      </uL>
    </div>
  );
}

export default HomePage;
