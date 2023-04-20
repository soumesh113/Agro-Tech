<<<<<<< HEAD
import sys
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import LabelEncoder
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/crop_recommendation", methods=["POST"])
def crop(): 
   data = request.json
   inp = np.array( [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
   inp[0] = data["N"]
   inp[1] = data["P"]
   inp[2] = data["K"]
   inp[3] = data["temp"]
   inp[4] = data["humid"]
   inp[5] = data["ph"]
   inp[6] = data["rainfall"]
   inp = inp.reshape(1, 7)
   np.set_printoptions(threshold=sys.maxsize)
   dataset = pd.read_csv("Crop_recommendation.csv")
   x = dataset.iloc[:, :-1].values
   y = dataset.iloc[:, -1].values

   le = LabelEncoder()
   y = le.fit_transform(y)
   
   from sklearn.preprocessing import StandardScaler
   sc = StandardScaler()
   x = sc.fit_transform(x)

   inp = sc.transform(inp)
   from sklearn.naive_bayes import GaussianNB
   classifier = GaussianNB()
   classifier.fit(x, y)
   pre = classifier.predict(inp)
   pre = le.inverse_transform(pre)
   res = {"pre" : pre[0]}
   return res

@app.route("/fert_recommendation", methods=["POST"])
def fert():
  data = request.json
  s = np.empty(1, dtype=object)
  s[0] = data["soil"]
  c = np.empty(1, dtype=object)
  c[0] = data["crop"]
  inp = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
  inp[0] = data["temp"]
  inp[1] = data["humid"]
  inp[2] = data["moist"]
  inp[3] = data["N"]
  inp[4] = data["K"]
  inp[5] = data["P"]
  inp = inp.reshape(1,6)
  np.set_printoptions(threshold=sys.maxsize)
  dataset = pd.read_csv("Fertilizer Prediction.csv")
  y = dataset.iloc[:, -1].values

  le = LabelEncoder()
  y = le.fit_transform(y)

  soil = dataset.iloc[:, 3].values
  soil = soil.reshape(len(soil), 1)
  print(dataset["Soil Type"].value_counts().sort_values(ascending=False))
  print(dataset["Crop Type"].value_counts().sort_values(ascending=False))
  ct = ColumnTransformer(transformers = [('encoder', OneHotEncoder(), [0])], sparse_threshold= False)
  soil = np.array(ct.fit_transform(soil))
  s = s.reshape(1,1)
  s = np.array(ct.transform(s))

  crop = dataset.iloc[:, 4].values
  crop = crop.reshape(len(crop), 1)

  ct = ColumnTransformer(transformers = [('encoder', OneHotEncoder(), [0])], sparse_threshold= False)
  crop = np.array(ct.fit_transform(crop))
  c = c.reshape(1, 1)
  c = np.array(ct.transform(c))

  inp = np.append(inp, c, 1)
  inp = np.append(inp, s, 1)

  x_1 = dataset.iloc[:, 0:3].values
  x_2 = dataset.iloc[:, 5:-1].values
  x = np.append(x_1, x_2, 1)
  x = np.append(x, crop, 1)
  x = np.append(x, soil, 1)

  from sklearn.preprocessing import StandardScaler
  sc = StandardScaler()
  x = sc.fit_transform(x)
  inp = sc.transform(inp)

  from sklearn.ensemble import RandomForestClassifier
  classifier = RandomForestClassifier(n_estimators = 15, criterion = 'entropy', random_state = 0)
  classifier.fit(x, y)
  pre = classifier.predict(inp)
  pre = le.inverse_transform(pre)
  res = {"pre" : pre[0]}
  return res

if __name__ == "__main__":
       app.run()





=======
import sys
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import LabelEncoder
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/crop_recommendation", methods=["POST"])
def crop(): 
   data = request.json
   inp = np.array( [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
   inp[0] = data["N"]
   inp[1] = data["P"]
   inp[2] = data["K"]
   inp[3] = data["temp"]
   inp[4] = data["humid"]
   inp[5] = data["ph"]
   inp[6] = data["rainfall"]
   inp = inp.reshape(1, 7)
   np.set_printoptions(threshold=sys.maxsize)
   dataset = pd.read_csv("Crop_recommendation.csv")
   x = dataset.iloc[:, :-1].values
   y = dataset.iloc[:, -1].values

   le = LabelEncoder()
   y = le.fit_transform(y)
   
   from sklearn.preprocessing import StandardScaler
   sc = StandardScaler()
   x = sc.fit_transform(x)

   inp = sc.transform(inp)
   from sklearn.naive_bayes import GaussianNB
   classifier = GaussianNB()
   classifier.fit(x, y)
   pre = classifier.predict(inp)
   pre = le.inverse_transform(pre)
   res = {"pre" : pre[0]}
   return res

@app.route("/fert_recommendation", methods=["POST"])
def fert():
  data = request.json
  s = np.empty(1, dtype=object)
  s[0] = data["soil"]
  c = np.empty(1, dtype=object)
  c[0] = data["crop"]
  inp = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
  inp[0] = data["temp"]
  inp[1] = data["humid"]
  inp[2] = data["moist"]
  inp[3] = data["N"]
  inp[4] = data["K"]
  inp[5] = data["P"]
  inp = inp.reshape(1,6)
  np.set_printoptions(threshold=sys.maxsize)
  dataset = pd.read_csv("Fertilizer Prediction.csv")
  y = dataset.iloc[:, -1].values

  le = LabelEncoder()
  y = le.fit_transform(y)

  soil = dataset.iloc[:, 3].values
  soil = soil.reshape(len(soil), 1)


  ct = ColumnTransformer(transformers = [('encoder', OneHotEncoder(), [0])], sparse_threshold= False)
  soil = np.array(ct.fit_transform(soil))
  s = s.reshape(1,1)
  s = np.array(ct.transform(s))

  crop = dataset.iloc[:, 4].values
  crop = crop.reshape(len(crop), 1)

  ct = ColumnTransformer(transformers = [('encoder', OneHotEncoder(), [0])], sparse_threshold= False)
  crop = np.array(ct.fit_transform(crop))
  c = c.reshape(1, 1)
  c = np.array(ct.transform(c))

  inp = np.append(inp, c, 1)
  inp = np.append(inp, s, 1)

  x_1 = dataset.iloc[:, 0:3].values
  x_2 = dataset.iloc[:, 5:-1].values
  x = np.append(x_1, x_2, 1)
  x = np.append(x, crop, 1)
  x = np.append(x, soil, 1)

  from sklearn.preprocessing import StandardScaler
  sc = StandardScaler()
  x = sc.fit_transform(x)
  inp = sc.transform(inp)

  from sklearn.ensemble import RandomForestClassifier
  classifier = RandomForestClassifier(n_estimators = 15, criterion = 'entropy', random_state = 0)
  classifier.fit(x, y)
  pre = classifier.predict(inp)
  pre = le.inverse_transform(pre)
  res = {"pre" : pre[0]}
  return res

if __name__ == "__main__":
       app.run()





>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
