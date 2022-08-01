import { useState, useEffect } from "react"

import { RatingContext } from '../../contexts/RatingContext';
import { useContext } from 'react';
const Vulnerabilities = () => {
    const { repoUrl } = useContext(RatingContext);
    const [jsonDat, setJsonDat] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const APIURL = "http://127.0.0.1:5000/test"

    useEffect(() => {
        if (repoUrl === "") {
            return;
        }
        fetch(`${APIURL}?repo_url=${repoUrl}`).then(res => res.json()).then(data => {
            setIsLoading(false);
            setJsonDat(data);
            console.log(data);
        }
        )
    }, [repoUrl])


    if (isLoading) {
        return (
            <div>
                Fetching Results
            </div>
        )
    }
    else {
        return (
            <div className="vulnerability-results">
                {jsonDat.length > 0 ? <h4>Vulnerabilities</h4> : <h4>No Vulnerabilities</h4>}
                {jsonDat.map(obj => {
                    return (
                        <div className="vulnerability">
                            <pre>{obj["code"]}</pre>
                            <p>File : {obj["filename"].substring(obj["filename"].indexOf("cloned_repos") + 12)}</p>
                            <p>Issue Severity : {obj["issue_confidence"]}</p>
                            <p>Issue Confidence : {obj["issue_severity"]}</p>
                            <p>Issue : {obj["issue_text"]}</p>
                        </div>)
                })}
            </div>
        )
    }
}

export default Vulnerabilities;