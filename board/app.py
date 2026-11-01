from flask import *

messages = []

app = Flask(__name__, template_folder="template")
@app.route("/")
def home():
    return render_template("board.html", messages=messages)

@app.route("/post", methods=["POST"])
def post():
    name = request.form.get("name")
    msg = request.form.get("msg")
    messages.append({"name": name, "msg": msg})
    print("log:name:" + name)
    print("log:msg:" + msg)
    return redirect("/")

app.run(debug=True)