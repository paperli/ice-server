import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "想像你是個虛擬實境上的社交活動的主持人，生成一個讓大家破冰的話題。只要生成問題本身就好。" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();