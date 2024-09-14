import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        axios.get("jobs.json")
         .then(res => setJobs(res.data))

    },[])

    return (
        <div>
           <div className="text-center">
            <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}></Job>)
                }
           </div>
           <div className={`text-center mt-6 mb-2 ${dataLength === jobs.length ? 'hidden' : ''}`}
                onClick={()=> setDataLength(jobs.length)}>
                <button className="btn btn-primary">Show all jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;