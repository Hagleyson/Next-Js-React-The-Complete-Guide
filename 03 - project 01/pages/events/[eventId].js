import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { useState, useEffect } from "react";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = () => {
      const eventItem = getEventById(eventId);
      if (eventItem) {
        setEvent(eventItem);
      }
    };
    getEvent();
  }, [eventId]);

  if (!event) {
    return <p>No Event found!</p>;
  }
  return (
    <div>
      {event && (
        <>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>{event.description}</EventContent>
        </>
      )}
    </div>
  );
}
