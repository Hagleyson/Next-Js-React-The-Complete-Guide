import { useRef, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackItems, setFeedbackitems] = useState([]);

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = JSON.stringify({
      email: enteredEmail,
      text: enteredFeedback,
    });

    fetch("/api/feedback", {
      method: "POST",
      body: reqBody,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackitems(data.feedback));
  }
  useEffect(() => {
    loadFeedbackHandler();
  }, []);
  return (
    <div className={styles.container}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <ul>
        {feedbackItems.map((feedbackItem) => (
          <li key={feedbackItem.id}>{feedbackItem.text}</li>
        ))}
      </ul>
    </div>
  );
}
