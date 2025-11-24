import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { wagmiConfig } from "./wagmi";

let _appkit: ReturnType<typeof createAppKit> | undefined;

export function appkit() {
  if (_appkit) return _appkit;

  const wagmiAdapter = new WagmiAdapter({
    wagmiConfig
  });

  _appkit = createAppKit({
    projectId: "dacd7e306902f6434b9dce9778a5e8a4",
    adapters: [wagmiAdapter],
    metadata: {
      name: "GameLife",
      description: "Farcaster Game",
      url: "https://example.org",
      icons: []
    }
  });

  return _appkit!;
}
