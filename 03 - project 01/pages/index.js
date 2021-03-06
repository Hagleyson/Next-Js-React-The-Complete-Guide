import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import Head from "next/head";
import NewsletterRegistration from "../components/Input/newsletter-registration";
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot gret events that a lloe you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
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
