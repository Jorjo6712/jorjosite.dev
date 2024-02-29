import os
import json
import bleach

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util, ObjectId

MONGODB_URI = os.environ.get("MONGODB_ENDPOINT")

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGODB_URI
mongo = PyMongo(app)

@app.route("/comments", methods=['GET'])
def comments_get():
    comments = list(mongo.db.comments.find())
    
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    response_data = {
        'comments': comments,
        'status': 'success'
    }

    return jsonify(response_data), 200

@app.route('/comments', methods=['POST'])
def comments_post():
    newComment = request.get_json()

    sanitized_comment = {
        'author': bleach.clean(newComment.get('author')),
        'message': bleach.clean(newComment.get('message')),
        'timestamp': bleach.clean(newComment.get('timestamp'))
    }

    mongo.db.comments.insert_one(sanitized_comment)
    
    response_data = {
        'status': '200 Successfully posted'
    }

    return jsonify(response_data), 201

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=56041)

   