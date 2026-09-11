export type ClientFeedbackRecord = {
  id: string;
  quote: string;
  name: string;
  attribution: string;
};

// Placeholder slides for design review; replace with approved testimonials before publication.
export const clientFeedback: readonly ClientFeedbackRecord[] = [
  {
    id: "feedback-communication",
    quote: "Client-approved feedback will appear here.",
    name: "Client 1 · Role · Organisation",
    attribution: "Placeholder · To be confirmed",
  },
  {
    id: "feedback-project-experience",
    quote: "Another client's experience with JWC will be shared here.",
    name: "Client 2 · Role · Organisation",
    attribution: "Placeholder · To be confirmed",
  },
];
