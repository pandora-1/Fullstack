from flask_restful import Resource
import json
from . import base
from . import parser
from flask import request

class History(Resource):
    def get(self):
        user = base.auth.sign_in_with_email_and_password(request.authorization.username,request.authorization.password)
        hasil = []
        for i in base.db.child("requests").order_by_child("email").equal_to(request.authorization.username).get(token=user['idToken']):
            hasil.append(i.val())
        return hasil
    
    def post(self):
        args = parser.request_posted.parse_args()
        user = base.auth.sign_in_with_email_and_password(args["email"], args["password"])
        content = json.loads(args['konten'])
        posted = {"email":args["email"],"jenis":args["jenis"],"konten":content}
        base.db.child("requests").push(posted, user['idToken'])
        return posted
