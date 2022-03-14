import { useEffect, useState } from "react";
import useSWR from "swr";
export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);
  const { data, error } = useSWR(
    "https://next-8c83f-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );
  useEffect(() => {
    if (data) {
      let transforedSales = [];
      for (const key in data) {
        transforedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transforedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales &&
        sales.map((sale) => (
          <li key={sale.id}>{`${sale.username} - ${sale.volume}`}</li>
        ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-8c83f-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  let transforedSales = [];
  for (const key in data) {
    transforedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transforedSales }, revalidade: 10 };
}
