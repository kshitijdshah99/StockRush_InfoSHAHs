import csv
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import numpy as np
from scipy.special import softmax
import urllib.request

def preprocess(text):
    new_text = []
    for t in text.split(" "):
        t = '@user' if t.startswith('@') and len(t) > 1 else t
        t = 'http' if t.startswith('http') else t
        new_text.append(t)
    return " ".join(new_text)

def sentiment_intensity(scores, labels):
    positive_label_index = labels.index('positive')
    negative_label_index = labels.index('negative')

    positive_score = scores[positive_label_index]
    negative_score = scores[negative_label_index]

    intensity = positive_score - negative_score
    return intensity

task = 'sentiment'
MODEL = f"cardiffnlp/twitter-roberta-base-{task}"

tokenizer = AutoTokenizer.from_pretrained(MODEL)

# Download label mapping
labels = []
mapping_link = f"https://raw.githubusercontent.com/cardiffnlp/tweeteval/main/datasets/{task}/mapping.txt"
try:
    with urllib.request.urlopen(mapping_link) as f:
        csvreader = csv.reader(f.read().decode('utf-8').split("\n"), delimiter='\t')
        labels = [row[1] for row in csvreader if len(row) > 1]
except Exception as e:
    print(f"Error downloading or parsing the mapping file: {e}")

# Load model
model = AutoModelForSequenceClassification.from_pretrained(MODEL)

# Read dataset from CSV file
csv_file_path = 'C:/Users/Admin/Desktop/ABC/Sentiment_Analysis/ML/train.csv'  # Replace with your CSV file path
output_csv_file_path = 'C:/Users/Admin/Desktop/ABC/Sentiment_Analysis/ML/news.csv'  # Replace with your desired output CSV file path

with open(csv_file_path, 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    fieldnames = reader.fieldnames + ['Fluctuation']  # Add a new field for sentiment intensity

    with open(output_csv_file_path, 'w', encoding='utf-8', newline='') as output_file:
        writer = csv.DictWriter(output_file, fieldnames=fieldnames)
        writer.writeheader()

        for row in reader:
            custom_headline = preprocess(row['News'])  # Assuming 'news' is the column with news headlines

            # Tokenize the headline
            encoded_input = tokenizer(custom_headline, return_tensors='pt')

            # Get model output
            output = model(**encoded_input)
            scores = output.logits[0].detach().numpy()
            scores = softmax(scores)

            # Calculate sentiment intensity
            intensity = sentiment_intensity(scores, labels)

            # Update the row with sentiment intensity
            row['Fluctuation'] = f"{intensity:.3f}"

            # Write the updated row to the new CSV file
            writer.writerow(row)


import pickle

# Your existing code for loading the model and tokenizer

# Save the model and tokenizer using save_pretrained
model.save_pretrained('C:/Users/Admin/Desktop/Copy_Game')
tokenizer.save_pretrained('C:/Users/Admin/Desktop/Copy_Game')

# Now, you can load the model and tokenizer using from_pretrained


