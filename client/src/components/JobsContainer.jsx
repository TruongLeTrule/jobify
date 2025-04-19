import { useAllJobsContext } from "../pages/AllJobs.jsx";
import Wrapper from '../assets/wrappers/JobsContainer.js'
import Job from './Job'

const JobsContainer = () => {
    const { data } = useAllJobsContext();
    const { jobs } = data;

    if (!jobs.length) {
        return <Wrapper>
            <h2>No job to show</h2>
        </Wrapper>
    }

    return <Wrapper>
        <div className='jobs'>
            {jobs.map((job) => <Job key={job._id} {...job}/>)}
        </div>
    </Wrapper>
}

export default JobsContainer