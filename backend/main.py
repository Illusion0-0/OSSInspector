from flask import Flask,request
import subprocess
import os
from git import Repo
import json
import shutil
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/test",methods = ['POST'])
def test_repo() :
    repo_url = request.values.get("repo_url")
    repo_name = repo_url.split("/")[-1].replace(".git", "")
    print(repo_url,repo_name)
    repo_path = os.path.join(os.getcwd(),repo_name)
    Repo.clone_from(repo_url, repo_path)
    command = " ".join(["bandit","-f" ,"json","-o","res.json","-r",repo_path])
    print(command)
    process = subprocess.Popen(command,shell=True,stdout=subprocess.PIPE)
    process.wait()
    #shutil.rmtree(repo_path, ignore_errors=False)
    return json.loads(open("res.json").read())

if __name__ == "__main__":
    app.run(debug=True)