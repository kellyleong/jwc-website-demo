export type ClientFeedbackRecord = {
  id: string;
  quote: string;
  name: string;
  attribution: string;
};

// Add only client-approved quotes and attribution here.
export const clientFeedback: readonly ClientFeedbackRecord[] = [];
