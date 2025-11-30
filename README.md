# GameChange / CastBounties 🎮

> **GameChange** is a Web3-enabled Farcaster Frame application designed to host "Quests of the Day" and bounties. Users can interact directly through Farcaster to view quests, pass requirements, and claim rewards.

---

## 🛠️ Tech Stack

This project is built using a modern Web3 frontend stack:

* **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Farcaster Integration:** [`@farcaster/frame-sdk`](https://docs.farcaster.xyz/) for interactive Frames.
* **Wallet & Auth:** [`@reown/appkit`](https://reown.com/) (formerly Web3Modal) for wallet connections.
* **Blockchain Interaction:** [`wagmi`](https://wagmi.sh/) and [`viem`](https://viem.sh/).
* **Account Abstraction:** [`@zerodev/sdk`](https://zerodev.app/) for smart wallet features.

---

## ✨ Features

* **Interactive Frame:** A dedicated Farcaster Frame that displays the "Bounty of the day".
* **Wallet Connection:** Integrated Reown AppKit (Project ID: `064...`) supporting WalletConnect.
* **Smart Accounts:** Includes ZeroDev SDK dependencies for ECDSA validator and session key support.
* **Quest System:** Logic to handle "Open forms" and claim flows directly within the frame context.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js & npm/yarn/pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/lucidartdev/gameLifechange.git](https://github.com/lucidartdev/gameLifechange.git)
    cd gameLifechange
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

* **`src/appkit.ts`**: Configures the Reown AppKit with Wagmi adapters and metadata.
* **`src/frame.ts`**: Initializes the Farcaster Frame logic, defining the initial image and button actions.
* **`src/wagmi.ts`**: Sets up the Wagmi config and Viem public client for Ethereum Mainnet interaction.
* **`src/main.tsx`**: Application entry point wrapping the App in QueryClientProvider.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

---

## 📝 License

This project is private.
