import os
import subprocess

from flask import Flask, render_template, request, url_for
from flask_ngrok import run_with_ngrok
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

app = Flask(__name__)
run_with_ngrok(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedBack.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class feedBack(db.Model):
  id = db.Column(db.Integer,  primary_key=True)
  text = db.Column(db.Text)
  name = db.Column(db.Text)
  email = db.Column(db.Text)

  def __init(self, text, name, mail):
    self.text = text
    self.name = name
    self.mail = mail


ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])


def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

uploads_dir = os.path.join(app.instance_path, 'uploads')

#get_direct = "static/"

os.makedirs(uploads_dir, exist_ok=True)
app.secret_key = "webApp"

@app.route("/", methods=['GET','POST'])
def predict():
    if not request.method == "POST":
        return render_template("index.html", check="checked", source="../static/images/Frame 1 (1).png")
    formid = request.args.get('formid', 1, type=int)
    if formid == 1:
        tt=""
        s=0
        m=0
        l=0

        option = request.form['select']
        if option == 'yolov5m':
          m=1
          weight = "bestm.pt"
          preName = "m"
        elif option =='yolov5l':
          l=1
          weight = "bestl.pt"
          preName = "l"
        else:
          s=1
          weight = "best.pt"
          preName = "s"
        
        video = request.files['file']
        video.save(os.path.join(uploads_dir, preName+secure_filename(video.filename)))

        
        #print(option)

        subprocess.run(['python3', 'detect.py','--weights', weight,'--source' , os.path.join(uploads_dir, preName+video.filename),'--imgsz', '416','--line-thickness', '3'])
        if video.mimetype == "video/mp4":
          tt = "désolé, je ne peux pas afficher la vidéo"
        
        if s == 1:
          Check = 'checked'
          Check2 = ''
          Check3 = ''
        elif m == 1:
          Check = ''
          Check2 = 'checked'
          Check3 = ''
        elif l == 1:
          Check = ''
          Check2 = ''
          Check3 = 'checked'

        return render_template("index.html", scrollToAnchor="seconde", source=url_for('static', filename=preName+video.filename), hreff="static/"+preName+video.filename, download_text="Télécharger", ttt= tt, check=Check, check2=Check2, check3=Check3 )

    if formid == 2:
        name = request.form.get("y")
        email = request.form.get("x")
        text = request.form.get("z")
        Check = 'checked'

        if name == '': 
          return render_template("index.html", text="Tu as oublié ton nom :(", color="red", scrollToAnchor="feed-back", check=Check, source="../static/images/Frame 1 (1).png");
        elif text == '':
          return render_template("index.html", text="Tu as oublié ton avis :(", color="red", scrollToAnchor="feed-back", check=Check, source="../static/images/Frame 1 (1).png");
        elif email == '':
          return render_template("index.html", text="Tu as oublié ton email :(", color="red", scrollToAnchor="feed-back", check=Check, source="../static/images/Frame 1 (1).png");
        else:
          feed_back = feedBack(name=name, email=email, text=text)
          db.session.add(feed_back)
          db.session.commit()

          t="merci pour le retour :)"
          return render_template("index.html", text=t, color="lime", scrollToAnchor="feed-back", check=Check, source="../static/images/Frame 1 (1).png");    
    if formid == 3:
        subprocess.run(['python3', 'detect.py','--weights', 'best.pt','--source' , '0','--imgsz', '416','--line-thickness', '3'])
        return render_template("index.html", check="checked",)

if __name__ == "__main__":
    db.create_all()
    app.run()
