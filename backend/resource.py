from flask_restful import Resource
import json
from . import base
from . import parser
from flask import request

class History(Resource):
    def get(self):
        hasil = []
        for i in base.db.child("requests").order_by_child("email").equal_to(request.authorization.username).get():
            hasil.append(i.val())
        print(hasil)
        return hasil
    
    def post(self):
        args = parser.request_posted.parse_args()
        content = json.loads(args['konten'])
        posted = {"email":args["email"],"jenis":args["jenis"],"konten":content}
        base.db.child("requests").push(posted)
        return posted
