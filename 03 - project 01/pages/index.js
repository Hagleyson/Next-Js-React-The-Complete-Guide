import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

export default function HomePage(props) {
  return (
    <>
      <EventList items={props.featuredEvetns} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvetns: featuredEvents,
    },
    revalidate: 1800,
  };
}
