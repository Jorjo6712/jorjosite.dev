import os
import json
import bleach
from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util, ObjectId

MONGODB_URI = os.environ.get("MONGODB_ENDPOINT")

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGODB_URI
mongo = PyMongo(app)

def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route("/comments", methods=['GET'])
def comments_get():
    comments = list(mongo.db.comments.find())
    return parse_json(comments), 200

@app.route('/comments', methods=['POST'])
def comments_post():
    comment = request.get_json()

    sanitized_comment = {
        'author': bleach.clean(comment.get('author')),
        'message': bleach.clean(comment.get('message')),
        'timestamp': comment.get('timestamp')
    }

    new_comment = mongo.db.comments.insert_one(sanitized_comment)
    return parse_json(new_comment.inserted_id), 201

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)

   