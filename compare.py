import pandas as pd
import numpy as np

# Step 1: Load the datasets
# Assuming you have CSV files for both datasets
df_universities = pd.read_csv('data/diem.csv')
df_individuals = pd.read_csv('data/merge_dataset.csv')

# Step 2: Data Preprocessing
# Convert scores if necessary (assuming individual scores need to be multiplied by 3)
df_individuals['Converted Score'] = df_individuals['Average Score'] * 3


# Step 3: Create a function to match universities
def match_universities(individual, universities):
    major = individual['Major']
    score = individual['Converted Score']

    matches = universities[
        (universities['Major'] == major) &
        (universities['Min Score'] <= score) &
        (universities['Max Score'] >= score)
        ]

    return ', '.join(matches['University'].unique())


# Step 4: Apply the matching function to all individuals
df_individuals['Matched Universities'] = df_individuals.apply(
    lambda x: match_universities(x, df_universities), axis=1
)

# Step 5: Display results
print(df_individuals[['Id', 'Major', 'Converted Score', 'Matched Universities']])

# Step 6: Generate summary statistics
summary = df_individuals.groupby('Major')['Matched Universities'].agg(lambda x: ', '.join(set(','.join(x).split(', '))))
print("\nSummary of universities by major:")
print(summary)

# Step 7: Save results to CSV
df_individuals.to_csv('matched_results.csv', index=False)