import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultTitle from "../../components/resultsTitle/results-title";
import { useState, useEffect } from "react";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
export default function FilteredEventspage() {
  const router = useRouter();
  const filterData = router.query.slug;
  const [filteredMonth, setFilteredMonth] = useState();
  const [filteredYear, setFilteredYear] = useState();

  useEffect(() => {
    if (filterData) {
      setFilteredYear(+filterData[0]);

      setFilteredMonth(+filterData[1]);
    }
  }, [filterData]);

  if (!filteredMonth || !filteredYear) {
    return <p className="center">Loading...</p>;
  }

  if (filteredMonth && filteredYear) {
    if (
      isNaN(filteredYear) ||
      isNaN(filteredMonth) ||
      filteredMonth > 12 ||
      filteredMonth < 1
    ) {
      return (
        <>
          <ErrorAlert>
            <p>Invalid filter</p>
          </ErrorAlert>

          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      );
    }

    const filteredEvents = getFilteredEvents({
      year: filteredYear,
      month: filteredMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
      console.log("Ok");
      return (
        <>
          <ErrorAlert>
            <p className="center">No events found for the chosen filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      );
    }
  }

  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
