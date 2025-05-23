import advancedFormat from 'dayjs/plugin/advancedFormat'
import day from "dayjs";
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo.jsx'
import { FaCalendarAlt,FaLocationArrow,FaBriefcase } from 'react-icons/fa'
import { Form,Link } from "react-router-dom";

day.extend(advancedFormat);

const Job = ({ _id,company,position,jobLocation,jobType,jobStatus,createdAt }) => {
    const date = day(createdAt).format('MMM Do, YYYY')

    return <Wrapper>
        <header>
            <div className='main-icon'>{company.charAt(0)}</div>
            <div className='info'>
                <h5>{position}</h5>
                <p>{company}</p>
            </div>
        </header>

        <div className='content'>
            <div className='content-center'>
                <JobInfo icon={<FaBriefcase/>} text={jobType}/>
                <JobInfo icon={<FaCalendarAlt/>} text={date}/>
                <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
                <div className={`status ${jobStatus}`}>{jobStatus}</div>
            </div>

            <footer className='actions'>
                <Link to={`../edit-job/${_id}`} className='btn edit-btn'>Edit</Link>
                <Form method='post' action={`../delete-job/${_id}`}>
                    <button type='submit' className='btn delete-btn'>Delete</button>
                </Form>
            </footer>
        </div>
    </Wrapper>
}

export default Job