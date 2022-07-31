from flask import Flask, request
import subprocess
import os
from git import Repo
import json
import shutil
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

results_dir = os.path.join(os.getcwd(), 'results')


@app.route("/test", methods=['POST'])
def test_repo():
    repo_url = request.values.get("repo_url")
    repo_name = repo_url.split("/")[-1].replace(".git", "")
    repo_result_path = f"{results_dir}/{repo_name}_res.json"
    repo_path = os.path.join(os.getcwd(), repo_name)
    if os.path.exists(f"./results/{repo_name}_res.json"):
        return json.loads(open(repo_result_path).read())
    print(repo_url, repo_name)
    if not os.path.exists(repo_path):
        Repo.clone_from(repo_url, repo_path)
    command = " ".join(["bandit", "-f", "json", "-o",
                       repo_result_path, "-r", repo_path])
    print(command)
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    process.wait()
    #shutil.rmtree(repo_path, ignore_errors=False)
    return json.loads(open(repo_result_path).read())


if __name__ == "__main__":
    if not os.path.exists(results_dir):
        print("no file")
        os.mkdir(results_dir)
    app.run(debug=True)
