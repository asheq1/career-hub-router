import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
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
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}></Job>)
                }
           </div>
        </div>
    );
};

export default FeaturedJobs;