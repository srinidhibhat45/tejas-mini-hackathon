from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index1.html")

@app.route('/relax')
def index_music_relax():
    return render_template("index_music_app.html")
    
if __name__ == "__main__":
    app.run(debug=True)