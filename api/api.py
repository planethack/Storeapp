from flask import Flask, request, json, jsonify
import mysql.connector
from flask_cors import CORS, cross_origin

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="shop"
)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS']= ['Content-Type']

def ToJson(data, type):
    array = []
    for i in data:
        row = {'id_product':i[0], 's_code':i[1], 's_name':i[2], 's_description':i[3], 'n_price':i[4], 'n_quantity':i[5]}
        array.append(row)
    return array



@app.route('/listProducts', methods=['GET'])
@cross_origin()
def listProducts():
    sql = """SELECT id_product, s_code, s_name, s_description, n_price, n_quantity  
               FROM product"""

    cur = mydb.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    return json.dumps({"data": ToJson(result, 'products')})

@app.route('/getProduct/<id>', methods=['GET'])
@cross_origin()
def getProduct(id):
    sql = f"SELECT * FROM product WHERE id_product= {id}"
    cur = mydb.cursor()
    cur.execute(sql)
    result = cur.fetchone()
    return json.dumps({"data": result})

@app.route('/createProduct', methods=['POST'])
@cross_origin()
def createProduct():
    data = request.get_json(force=True)
    #print('abc:'+data.get('user'))
    sql = f"INSERT INTO Product (s_code, s_name, s_description, n_price, n_quantity) VALUES ('{data['code']}', '{data['name']}', '{data['description']}', {data['price']}, {data['quantity']})"
    print(sql)
    cur = mydb.cursor()
    cur.execute(sql)
    mydb.commit()
    response = jsonify({'response': "insert ok"})
    return response

@app.route('/deleteProduct', methods=['DELETE'])
@cross_origin()
def deleteProduct():
    data = request.get_json(force=True)
    sql = f"DELETE FROM product WHERE id_product = {data['id']}"
    cur = mydb.cursor()
    cur.execute(sql)
    mydb.commit()
    response = jsonify({'response': "ok"})
    return response

@app.route('/updateProduct', methods=['PUT'])
@cross_origin()
def updateProduct():
    data = request.get_json(force=True)
    sql = f"UPDATE product SET s_code = '{data['code']}', s_name = '{data['name']}', s_description = '{data['description']}', n_price = {data['price']}, n_quantity = {data['quantity']} WHERE id_product = {data['id']}"
    cur = mydb.cursor()
    cur.execute(sql)
    mydb.commit()
    response = jsonify({'response': "update ok"})
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)