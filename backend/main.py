from turtle import clone
from flask import Flask, request,jsonify
import subprocess
import os
from git import Repo
import json
import shutil
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

results_dir = os.path.join(os.getcwd(), 'results')
cloned_repo_dir = os.path.join(os.getcwd(), 'cloned_repos')


@app.route("/test")
def test_repo():
    repo_url = request.values.get("repo_url") 
    repo_name = repo_url.split("/")[-1].replace(".git", "")
    repo_result_path = os.path.join(results_dir, f"{repo_name}_res.json")
    repo_path = os.path.join(cloned_repo_dir, repo_name)
    if os.path.exists(repo_result_path):
        return jsonify(json.loads(open(repo_result_path).read())["results"])
    print(repo_url, repo_name)
    if not os.path.exists(repo_path):
        Repo.clone_from(repo_url, repo_path)
    command = " ".join(["bandit", "-f", "json", "-o",
                       repo_result_path, "-r", repo_path])
    print(command)
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    process.wait()
    #shutil.rmtree(repo_path, ignore_errors=False)
    return jsonify(json.loads(open(repo_result_path).read())["results"])


if __name__ == "__main__":
    if not os.path.exists(results_dir):
        print("no file")
        os.mkdir(results_dir)
    if not os.path.exists(cloned_repo_dir):
        print("no cloned")
        os.mkdir(cloned_repo_dir)
    app.run(debug=True)
