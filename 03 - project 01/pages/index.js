import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import EventsSearch from "../components/events/events-search";
import { useRouter } from "next/router";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
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
