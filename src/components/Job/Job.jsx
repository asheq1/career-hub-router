import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Job = ({job}) => {
    const {logo, company_name, remote_or_onsite,
        location,salary,job_type,  job_title} = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                    src={logo}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="border px-5 font-bold py-1 
                          border-[#7E90FE] text-[#7E90FE] rounded mr-4">{remote_or_onsite}</button>
                        <button className="border px-5 font-bold py-1 
                          border-[#7E90FE] text-[#7E90FE] rounded">{job_type}</button>
                    </div>
                    <div className="mt-4 flex ">
                        <h2 className="flex mr-4"><CiLocationOn className="text-2xl" />{location}</h2>
                        <h2 className="flex"><RiMoneyDollarCircleLine className="text-2xl" />{salary}</h2>
                    </div>
                    <div className="card-actions ">
                        <button className="btn  px-3 py-2 text-white" style={{ backgroundColor: '#7E90FE' }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;