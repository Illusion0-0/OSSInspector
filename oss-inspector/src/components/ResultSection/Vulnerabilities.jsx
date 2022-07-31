import {useState,useEffect} from "react"

const Vulnerabilities = ({repoUrl}) => {
    const [jsonDat,setJsonDat] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const url = "http://127.0.0.1:5000/test"

    useEffect(() => {
        if (repoUrl === "") {
            return;
        }
        fetch(url,{
            method : 'POST',
            body : {
                "repo_url" : repoUrl
            }
        })
    })
    

    if (isLoading) {
        return (
            <div>
                Fetching Results
            </div>
        )
    }
    else {
        return (
            <div>
                {jsonDat["results"].forEach(obj => {
                    return (
                    <div>
                        <p>File : {obj["filename"]}</p>
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