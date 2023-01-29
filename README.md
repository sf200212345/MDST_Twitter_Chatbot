# W23 MDST Twitter Chatbot

## Introduction
Have you ever wondered how chatbots like ChatGPT manage to interact with users so smoothly, or how giant conversational systems like Alexa are built on a backend able to handle conversations on millions of devices? If so, join this semester’s Twitter chatbot project! We will be training our own language models, building backends, and deploying them to the cloud. This project also provides an excellent introduction to methods and architectures that are widely employed in industry (in high paying fields like ML engineering 👀).

Prerequisites: Python programming, ML experience preferred

Skills learned: Web development (Flask), NLP, Cloud Engineering (AWS)

## Project Goals
This project will be split up into three sections:
1. Build and train chatbot using tutorials and outlines provided by leads (5-6 weeks)
    - If groups are unable to build a model or are unsatisfied with it, they can use pretrained models off of places like HuggingFace
2. Develop Flask backend and connect with Twitter's API (2 weeks)
3. Deploy to cloud (2-3 weeks)

Ultimately, we want each group to be able to have a fully functioning Twitter chatbot that they can show off to friends, family and recruiters. There will be a lot of opportunities for groups to take ownership of their project, such as choosing a specific dataset, model architecture, and more. 

## Specifics
We will start by building LSTM models in a seq2seq architecture, after which members are free to experiment with more advanced models and architectures, like transformers or state-based chatbots. For the backend, we will be using Flask, which is a lightweight Python framework used to build web servers. We will also be using Tweepy, which simplifies connecting to Twitter's API. Finally, we will be deploying our chatbots to AWS to give members experience using state of the art ML engineering tools.

## Datasets
Members will be able to choose their own datasets based on what kind of model they want to build, but we will provide resources as a starting point to find datasets. For example, in the [paper linked below](https://www.public.asu.edu/~hdavulcu/SNAM-2020.pdf), they built a dataset with tweets about guns to make a chatbot that specialized in responses about guns. 
- https://imerit.net/blog/14-best-chatbot-datasets-for-machine-learning-all-pbm/ 

## Resources (will be populated more as semester progresses)
- Tutorials for LSTM seq2seq chatbot:
    - TensorFlow: https://medium.com/analytics-vidhya/chatbot-development-using-deep-learning-nlp-implementing-seq2seq-model-eb1114903523
    - PyTorch: https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html
    - Keras: https://towardsdatascience.com/how-to-implement-seq2seq-lstm-model-in-keras-shortcutnlp-6f355f3e5639
- Tutorial for Transformer seq2seq chatbot:
    - TensorFlow: https://blog.tensorflow.org/2019/05/transformer-chatbot-tutorial-with-tensorflow-2.html
- Tweepy docs: https://docs.tweepy.org/en/stable/
- Flask docs: https://flask.palletsprojects.com/en/2.2.x/
- Paper formalizing building a chatbot with LSTM in seq2seq architecture https://www.public.asu.edu/~hdavulcu/SNAM-2020.pdf
- Text generation using LSTMs in Keras/TensorFlow: https://www.kaggle.com/code/shivamb/beginners-guide-to-text-generation-using-lstms
    - For more specific information on what an LSTM is: https://www.kaggle.com/code/thebrownviking20/intro-to-recurrent-neural-networks-lstm-gru
- Introduction to seq2seq: https://medium.com/analytics-vidhya/encoder-decoder-seq2seq-models-clearly-explained-c34186fbf49b

## Timeline
### Week 1: Introduction
- Introduction to project
- Split into sub-teams
- Setup local environments
- Search and explore datasets and models

### Weeks 2-5: Model building and training
- Decide on model and datasets
- Implement model and train on datasets
- Optionally implement additional models
- Set up Twitter Developer account

### Week 6: Start backend phase of project
- Wrap up model training
  - If model is unsatisfactory to the members of the sub-team, can get pretrained model from places like HuggingFace
- Setup local server with default configs for testing
- Start building Flask backend

### Week 7: Continue working on backend
- Continue building backend
- Connect and test the Twitter API using Tweepy

### Week 8: Start cloud phase of project
- Wrap up backend development
- Wrap up Twitter API integration
- Start deployment to AWS

### Week 9: Continue deployment
- Continue deployment to AWS (we anticipate this taking a while)

### Week 10: Final touches
- Wrap up development for all chatbots
- Complete write-up
- Compile most interesting tweets for showcase (can be thought-provoking, funny or insights into issues/successes during training)
