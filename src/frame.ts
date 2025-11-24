import { init, post, text, button, image } from "@farcaster/frame-sdk";

let initialized = false;

export function initFrame() {
  if (initialized) return;

  init({
    initialState: () =>
      post(
        image({
          src:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adigeo.com%2Fen%2Fshopping%2Fgamelife%2F&psig=AOvVaw3v_CPP9VzIs7NsiesfkE8Y&ust=1764036556163000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjJnbfaiZEDFQAAAAAdAAAAABAE",
          aspectRatio: "1.91:1"
        }),
        text("Bounty of day: Pass and Claim!"),
        button({
          label: "Open forms",
          onClick: ({ state }) => ({ ...state, open: true })
        })
      )
  });

  initialized = true;
}
