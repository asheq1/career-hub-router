import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobs } from "../utilities/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    // console.log(jobs, id);
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJobs = () => {
        saveAppliedJobs(idInt);
        toast('You have applied successfully')
    }

    return (
        <div>
            <div className="grid md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h1 className="text-4xl">Details coming here</h1>
                    <h2>Job Details: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button 
                        onClick={handleApplyJobs}
                        className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;