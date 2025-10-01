# 📝 Text Summarizer using T5-Small  

**Tech Stack**: *Natural Language Processing (NLP), PyTorch, Transformers (Hugging Face), Flask, Python*

- **Transformers (Hugging Face)**
- **Flask**
- **Python**
- **HTML / CSS / Bootstrap**
- **Gunicorn / Deployment Tools**

---

## 📖 Project Overview  
This project is a **Text Summarization Web App** powered by the **T5-small** transformer model.  
The goal is to take long text inputs (articles, documents, or paragraphs) and generate a concise and meaningful summary.  

Unlike extractive summarization, which simply picks sentences from the original text, the **T5-small model** is trained for **abstractive summarization**, meaning it generates new sentences that capture the essence of the input.  

---

## 🔑 Key Features
- **Interactive Web Interface**: Built with Flask and styled using HTML/CSS/Bootstrap.  
- **Transformer Model**: Utilizes Hugging Face’s pre-trained **T5-small** model for summarization.  
- **Customizable Input**: Accepts any text input from users.  
- **Lightweight Deployment**: Optimized for CPU-friendly environments using a smaller transformer variant.  
- **REST API Support**: Backend can also serve summaries via an API endpoint for integration with other apps.  

---

## ⚙️ How It Works
1. User enters a long piece of text into the web app.  
2. The Flask backend passes the text to the **T5-small** model (loaded via Hugging Face Transformers).  
3. The model generates a summary using **PyTorch inference**.  
4. The summarized text is displayed on the frontend in real-time.  

---

## 🛠️ Deployment
- Deployed using **Flask + Gunicorn**.  
- Can be hosted on cloud platforms such as **Heroku, AWS, or Render**.  
- Lightweight design ensures smooth performance even on free-tier hosting.  

---

## 📸 Demo Preview
*(Screenshots or GIFs of the web app UI can be added here)*  

---

## 💡 Learning Outcomes
- Hands-on experience with **transformer models** (T5-small).  
- Model deployment using **Flask**.  
- Bridging NLP models with a **user-friendly web interface**.  
- Understanding trade-offs between model size, inference speed, and accuracy.  

---

## 🔮 Future Improvements
- Add support for **multiple summarization models** (e.g., BART, Pegasus).  
- Provide options for **summary length control**.  
- Create a **browser extension** for one-click summarization of web articles.  
- Add **user authentication** to save and track summaries.  

---

✨ **This project combines NLP, deep learning, and full-stack deployment — showcasing how AI models can be made accessible through simple web applications.**
