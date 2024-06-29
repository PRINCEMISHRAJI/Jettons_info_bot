![Screenshot (5)(1)](https://github.com/PRINCEMISHRAJI/Jettons_info_bot/assets/50262987/afcec5df-5511-471d-8c50-f12c3bc5201b)

README FILE
AUTHOR : ANKIT MISHRA
# Jettons Telegram Bot (Coinmarketcap)

This is a Telegram bot that provides information about various cryptocurrencies using the CoinMarketCap API. Users can get information about a specific coin by using the `/coin` command followed by the coin's symbol.

## Features

- Fetch cryptocurrency information such as name, symbol, category, description, launch date, infinite supply status, and contract address.
- Provide links to the cryptocurrency's Twitter, website, and source code.

## Prerequisites

- Node.js and npm installed on your machine.
- A Telegram bot token obtained from [BotFather](https://core.telegram.org/bots#6-botfather).
- A CoinMarketCap API key. You can get one by signing up on the [CoinMarketCap Developer Portal](https://pro.coinmarketcap.com/).

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/coinmarketcap-telegram-bot.git
    cd coinmarketcap-telegram-bot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your bot token and CoinMarketCap API key:
    ```
    BOT_TOKEN=your-telegram-bot-token
    CMC_API_KEY=your-coinmarketcap-api-key
    ```

## Usage

1. Start the bot:
    ```sh
    node bot.js
    ```

2. Interact with the bot on Telegram:
    - Use the `/start` command to get a welcome message.
    - Use the `/coin` command followed by a coin symbol (e.g., `/coin eth`) to get information about that coin.

## Deploying to Render

To deploy your bot on Render, follow these steps:

1. Create a new Web Service on [Render](https://render.com/).
2. Connect your GitHub repository to Render.
3. In the Build Command, use:
    ```sh
    npm install
    ```

4. In the Start Command, use:
    ```sh
    node bot.js
    ```

5. Add the environment variables `BOT_TOKEN` and `CMC_API_KEY` in the Render dashboard under the Environment section.

6. Deploy the service.

## Example

Here's an example of how the bot works:

- User sends `/coin eth`.
- The bot responds with detailed information about Ethereum, including its name, symbol, category, description, launch date, infinite supply status, contract address, and links to its Twitter, website, and source code.
