export const STATUS_VALUES = [
  "WISHLIST",
  "APPLIED",
  "PHONE_SCREEN",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
  "WITHDRAWN",
] as const;

export type StatusValue = (typeof STATUS_VALUES)[number];

export const STATUS_LABELS: Record<StatusValue, string> = {
  WISHLIST: "Wishlist",
  APPLIED: "Applied",
  PHONE_SCREEN: "Phone screen",
  INTERVIEW: "Interview",
  OFFER: "Offer",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
};
