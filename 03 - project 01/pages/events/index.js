import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function HomePage(props) {
  const featuredEvents = props.events;
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
