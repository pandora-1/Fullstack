from flask_restful import reqparse

request_posted = reqparse.RequestParser()
request_posted.add_argument("jenis", type=str, help="harus terdapat jenis request", required=True)
request_posted.add_argument("email",type=str,help="harus ada email pengguna", required=True)
request_posted.add_argument("password",type=str,help="harus ada password pengguna", required=True)
request_posted.add_argument("konten", type=str)