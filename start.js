// import OpenAI from "openai";

const OpenAI = require("openai");
const openai = new OpenAI();

const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://paperworkstud.io', 'https://paperworkstud.io/ice']
}));

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

app.post('/ask', async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "想像你是個虛擬實境上的社交活動的主持人，生成一個讓大家破冰的話題。只要生成問題本身就好。" }],
    model: "gpt-3.5-turbo",
  });

  res.json({
    answer: completion.choices[0]
  });
});
// main();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));