from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import csv
import json
import random
import numpy as np
from scipy.special import softmax
from transformers import AutoModelForSequenceClassification, AutoTokenizer
loaded_model = AutoModelForSequenceClassification.from_pretrained('C:/Users/Yash/PycharmProjects/Inheritance_ML')
loaded_tokenizer = AutoTokenizer.from_pretrained('C:/Users/Yash/PycharmProjects/Inheritance_ML')


app = FastAPI()

class InputText(BaseModel):
    headline: str

# Read headlines from the CSV file
csv_file_path = 'C:/Users/Yash/PycharmProjects/Inheritance_ML/news.csv'  # Replace with your CSV file path
headlines = []
fluctuations = []
with open(csv_file_path, 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        headlines.append(row['News'])  # Assuming 'News' is the column with news headlines
        fluctuations.append(row['Fluctuation'])
@app.get("/")
def predict_sentiment():
    # Select a random headline from the dataset
    i = random.randint(0, len(headlines) - 1)
    random_headline = headlines[i]
    intensity = fluctuations[i]

    # Return JSON response
    return {"headline": random_headline, "sentiment_intensity": intensity}


