
export const MessageType = {
  Error: "error",
  Info: "info",
  Warning: "warning",
  Success: "success",
} as const;

// 2. TypeScript type
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

export type ToastMessage = {
  id: string;
  type: MessageType;
  message: string;
};
