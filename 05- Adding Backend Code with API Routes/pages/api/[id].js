import { buildFeedbackPath, extractFeedback } from "./feedback";

export default async function handler(req, res) {
  const feedbackId = req.query.id;
  const filePath = buildFeedbackPath();
  const feedbackData = await extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({ feedback: selectedFeedback });
}
