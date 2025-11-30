import { init, post, text, button, image } from "@farcaster/frame-sdk";

let initialized = false;

export function initFrame() {
  if (initialized) return;

  init({
    initialState: () =>
      post(
        image({
          // Updated text in image URL to "GameLife" and fixed typo
          src:
            "https://dummyimage.com/1200x630/111827/ffffff&text=GameLife%3A+Begin+Your+Journey",
          aspectRatio: "1.91:1"
        }),
        text("Welcome to GameLife. Start your career?"),
        button({
          label: "Start Game", // Changed from "Open forms" to be more game-like
          onClick: ({ state }) => ({ ...state, open: true })
        })
      )
  });

  initialized = true;
}
