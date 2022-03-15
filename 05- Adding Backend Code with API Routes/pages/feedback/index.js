import { buildFeedbackPath, extractFeedback } from "../api/feedback";

import { useState } from "react";
export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((reponse) => reponse.json())
      .then((data) => setFeedbackData(data.feedback));
  };
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedback &&
          props.feedback.map((item) => (
            <li key={item.id}>
              {item.text}{" "}
              <button onClick={loadFeedbackHandler.bind(this, item.id)}>
                Show details
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = await extractFeedback(filePath);

  return {
    props: {
      feedback: data,
    },
  };
}
