import os
import json
import bleach

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util, ObjectId

MONGODB_URI = os.environ.get("MONGODB_ENDPOINT")
KEY = os.environ.get("VUE_APP_KEY")

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGODB_URI
mongo = PyMongo(app)

@app.route("/comments", methods=['GET'])
def comments_get():
    
    key = request.headers.get('X-Key')

    if key == KEY:
        
        comments = list(mongo.db.comments.find())
    
        for comment in comments:
            comment['_id'] = str(comment['_id'])

        response_data = {'comments': comments, 'status': 'success'}

        return jsonify(response_data), 200
    else:
        return "<h1>Error: Unauthorized to fetch comments data</h1>", 401

@app.route('/comments', methods=['POST'])
def comments_post():

    key = request.headers.get('X-Key')

    if key == KEY:
        
        newComment = request.get_json()

        sanitized_comment = {
            'author': bleach.clean(newComment.get('author')),
            'message': bleach.clean(newComment.get('message')),
            'timestamp': bleach.clean(newComment.get('timestamp'))
        }

        if sanitized_comment['author'] == '' or sanitized_comment['message'] == '' or sanitized_comment['timestamp'] == '':
            response = { 'Error' : 'author/message or timestamp cannot be empty' }
            return jsonify(response), 422
        else:
            mongo.db.comments.insert_one(sanitized_comment)
            return '', 201
    else:
        return '<h1>Error: Unauthorized to post comment data</h1>', 401
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=56041)

   