import streamlit as st

import requests
import pandas as pd
import plotly.graph_objects as go


st.title("Trading Economics Assignment")

country_name = st.sidebar.selectbox("Select Country", ("mexico", "sweden"))

response = requests.get(
    "https://api.tradingeconomics.com/historical/country/"
    + country_name
    + "/indicator/gdp?c=guest:guest&f=json"
)
global data

if response.status_code == 200:
    data = response.json()
    st.subheader(country_name.capitalize() + "'s GDP data")
    dataFrame = pd.DataFrame(data)
    dataFrame.drop(columns=['Country'], inplace=True)
    dataFrame.drop(columns=['Category'], inplace=True)

    st.table(dataFrame)
else:
    st.error(f"Error: {response.status_code} - {response.reason}")

x = []
y = []

for entry in data:
    x.append(entry["DateTime"][0:4])
    y.append(entry["Value"])

fig = go.Figure(data=[go.Bar(x=x, y=y)])

fig.update_layout(
    title="GDP Value vs Year", xaxis_title="Year", yaxis_title="GDP Value"
)

st.plotly_chart(fig)

responseMexico = requests.get(
    "https://api.tradingeconomics.com/historical/country/mexico/indicator/gdp?c=guest:guest&f=json"
)
responseSweden = requests.get(
    "https://api.tradingeconomics.com/historical/country/sweden/indicator/gdp?c=guest:guest&f=json"
)

if responseMexico.status_code == 200:
    dataMexico = responseMexico.json()
    dataFrameMexico = pd.DataFrame(dataMexico)
else:
    st.error(f"Error: {response.status_code} - {response.reason}")


if responseSweden.status_code == 200:
    dataSweden = responseSweden.json()
    dataFrameSweden = pd.DataFrame(dataSweden)
else:
    st.error(f"Error: {response.status_code} - {response.reason}")

x1 = []
y1 = []
y2 = []

for i, row in dataFrameMexico.iterrows():
    x1.append(row["DateTime"][0:4])
    y1.append(row["Value"])

fig1 = go.Figure(data=[go.Bar(name="Mexico", x=x1, y=y1)])

for i, row in dataFrameSweden.iterrows():
    x1.append(row["DateTime"][0:4])
    y2.append(row["Value"])

# fig1.add_trace(go.Bar(x=x1, y=y2))

fig1.add_trace(go.Bar(name="Sweden", x=x1, y=y2))

fig1.update_layout(
    title="Comparing GDP Values for Mexico and Sweden",
    xaxis_title="Year",
    yaxis_title="GDP Value (Mexico and Sweden)",
    barmode="group",
)

st.plotly_chart(fig1)
