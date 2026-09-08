import { Annotation } from "@langchain/langgraph";

export const ChatState = Annotation.Root({
  messages: Annotation({
    reducer: (left, right) => left.concat(right),
    default: () => []
  }),

  response: Annotation({
    reducer: (_, right) => right,
    default: () => ""
  }),

  navigation: Annotation({
    reducer: (_, right) => right,
    default: () => null
  })
});