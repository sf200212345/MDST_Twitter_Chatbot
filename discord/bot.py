import discord
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

print("loading models...")
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")
print("models loaded")

msg_history = []

num_generated = 10

def run_chatbot(input_text):
    global msg_history, num_generated
    # encode the input text, add the eos_token and return a tensor in Pytorch
    new_input = tokenizer.encode(input_text + tokenizer.eos_token, return_tensors='pt')
    
    if num_generated < 10:
        bot_input_ids = torch.cat([msg_history, new_input], dim=-1)
    else:
        bot_input_ids = new_input
        num_generated = 0
    msg_history = bot_input_ids
    
    num_generated += 1

    # generated a response while limiting the total chat history to 1000 tokens,
    chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    # pretty print last ouput tokens from bot
    return "{}".format(tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True))

TOKEN = "MTA5NzE5NzkzNTQyMDI1MjIxMA.G40SGh.udLHzYaYoahH-QPxUeLTHwfFuQ4lqo06iqufXI"

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'{client.user} has connected')

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    
    output = run_chatbot(message.content)
    await message.reply(output)

client.run(TOKEN)
