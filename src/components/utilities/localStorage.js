const getAppliedJobss = () => {
    const storedApplied = localStorage.getItem('jobs');
    if(storedApplied){
        return JSON.parse(storedApplied)
    }
    return []
}

const saveAppliedJobs = id => {
    const storedApplied = getAppliedJobss()
    const exists = storedApplied.find(jobId => jobId === id)
    if(!exists){
        storedApplied.push(id)
        localStorage.setItem('jobs', JSON.stringify(storedApplied))
    }
}

export {getAppliedJobss, saveAppliedJobs}