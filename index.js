require('dotenv').config();
const { Telegraf } = require("telegraf");
const axios = require("axios");
const express = require('express');

const Token = process.env.BOT_TOKEN;
const key = process.env.key;
const bot = new Telegraf(Token);

const app = express();
const PORT = process.env.PORT || 3000;

bot.start((ctx) => {
    const query = `
                Ankit Coinmarketcap Bot
    => Get coin information using the /coin command
    Example : /coin eth
    `
    ctx.reply(query);

});

bot.command("coin", async (ctx) => {
    const input = ctx.message.text.split(' ');
    if (input.length !== 2) {
        return ctx.reply('Invalid command. Use /coin <symbol>');
    }

    const symbol = input[1].toUpperCase();

    try {
        let response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbol}`,
            {
                headers: {
                    "X-CMC_PRO_API_KEY": key,
                },
            }
        );
        if (response.data) {
            const parser = symbol.toUpperCase();
            const dataToken = response.data.data[parser];
            const data = dataToken[0];
            // console.log(data);
            if (data) {
                const message = `
            💰 <b> ${data.name} : ${data.symbol} (${data.category})</b>

            ${data.description}

            Launched On : ${data.date_launched}
            Infinite Supply : ${data.infinite_supply ? "Yes" : "No"}
            Contract Address : ${data.contract_address[0]?.contract_address || "Not Available"}

            More Information, Watch Below
           X <a href="${data.urls.twitter[0]}">Twitter</a>
           ₿ <a href="${data.urls.website[0]}">Website</a>
           🔗 <a href="${data.urls.source_code[0]}">Source Code</a>
            `
                ctx.telegram.sendMessage(ctx.chat.id, message, { parse_mode: "HTML" })
            } else {
                ctx.reply(`${symbol} coin not found, try with a different coin`)
            }
        } else {
            ctx.reply(`No data received for ${symbol}`);
        }
    } catch (error) {
        console.error('Error fetching data', error);
        ctx.reply(`${symbol} coin not found, try with a different coin`)
    }
});

bot.launch();
console.log("Bot is running successfully");

app.get('/', (req,res) =>{
    res.send("Bot is running")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});