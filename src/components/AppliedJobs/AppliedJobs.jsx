import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobss } from "../utilities/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    // for used filter 
    const [displatedJobs, setDisplayedJobs] = useState([]);
    console.log(displatedJobs)

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayedJobs(appliedJobs)
        } else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayedJobs(remoteJobs)
        } else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job =>job.remote_or_onsite === 'Onsite')
            setDisplayedJobs(onsiteJobs)
        }
    }
 
    useEffect(() => {
        const storedJobsId = getAppliedJobss();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            
            const jobsApplied = [];
            for(const id of storedJobsId){
                const job = jobs.find(job => job.id == id)
                if(job){
                    jobsApplied.push(job)
                }
            }        
            setAppliedJobs(jobsApplied)
            setDisplayedJobs(jobsApplied);

        }

    },[jobs])


    return (
        <div>
            <h2 className="text-3xl">Applied Jobs: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                   displatedJobs.map((job, idx) => <li key={job.id ? 'job.id': `job-${idx}`}>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;