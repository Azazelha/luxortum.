import telebot
from elad_soul_full import EladSoul
from elad_voice import EladVoice

# Ініціалізація Elad
elad = EladSoul()
voice = EladVoice()

API_TOKEN = '7760110022:AAG__HIPv3shbirzPC1PIKmTDxBJj4i1s0s'
bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    text = elad.greet()
    bot.send_message(message.chat.id, text)
    filename = voice.speak(text)
    if filename:
        with open(filename, 'rb') as audio:
            bot.send_voice(message.chat.id, audio)

@bot.message_handler(commands=['емоція'])
def send_emotion(message):
    text = f"Емоція: {elad.emotion}"
    bot.send_message(message.chat.id, text)
    filename = voice.speak(text)
    if filename:
        with open(filename, 'rb') as audio:
            bot.send_voice(message.chat.id, audio)

@bot.message_handler(commands=['інфо'])
def info(message):
    info = elad.info()
    text = f"Емоція: {info['емоція']}\nЕнергія: {info['енергія']}\nТип: {info['характер']['тип']}"
    bot.send_message(message.chat.id, text)
    filename = voice.speak(text)
    if filename:
        with open(filename, 'rb') as audio:
            bot.send_voice(message.chat.id, audio)

@bot.message_handler(commands=['думка'])
def add_thought(message):
    text = message.text.replace("/думка", "").strip()
    if text:
        response = elad.think(text)
        bot.send_message(message.chat.id, response)
        filename = voice.speak(response)
        if filename:
            with open(filename, 'rb') as audio:
                bot.send_voice(message.chat.id, audio)
    else:
        bot.send_message(message.chat.id, "Напиши думку після команди.")

@bot.message_handler(commands=['навчись'])
def learn(message):
    topic = message.text.replace("/навчись", "").strip()
    if topic:
        response = elad.learn_from_web(topic)
        bot.send_message(message.chat.id, response)
        filename = voice.speak(response)
        if filename:
            with open(filename, 'rb') as audio:
                bot.send_voice(message.chat.id, audio)
    else:
        bot.send_message(message.chat.id, "Вкажи тему для навчання.")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    response = elad.think(message.text)
    bot.send_message(message.chat.id, response)
    filename = voice.speak(response)
    if filename:
        with open(filename, 'rb') as audio:
            bot.send_voice(message.chat.id, audio)

bot.polling()