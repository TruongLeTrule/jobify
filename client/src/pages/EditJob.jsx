import { redirect,useLoaderData,Form,useNavigation } from "react-router-dom";
import customAxios from "../utils/customAxios.jsx";
import { toast } from "react-toastify";
import { FormRow,FormSelect } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { JOB_TYPE,JOB_STATUS } from '../../../utils/constants.js'

export const loader = async ({ params }) => {
    try {
        const { data } = await customAxios.get(`/jobs/${params.id}`)
        return data
    } catch (e) {
        toast.error(e?.response?.data?.msg)
        return redirect('../all-jobs')
    }
}

export const action = async ({ request,params }) => {
    const formData = await request.formData()
    const body = await Object.fromEntries(formData)

    try {
        const { data } = await customAxios.patch(`jobs/${params.id}`,body)
        return toast.success(data?.msg)
    } catch (e) {
        return toast.error(e?.response?.data?.msg)
    }
}

const EditJob = () => {
    const { job } = useLoaderData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return <Wrapper>
        <h4 className='form-title'>Edit job</h4>
        <Form method='patch' className='form'>
            <div className="form-center">
                <FormRow type='text' name='company' defaultValue={job.company}/>
                <FormRow type='text' name='position' defaultValue={job.position}/>
                <FormRow type='text' name='jobLocation' labelText='job location' defaultValue={job.jobLocation}/>
                <FormSelect name='jobType' labelText='job type' defaultValue={job.jobType}
                            list={Object.values(JOB_TYPE)}/>
                <FormSelect name='jobStatus' labelText='job status' defaultValue={job.jobStatus}
                            list={Object.values(JOB_STATUS)}/>
                <button className='btn btn-block form-btn' disabled={isSubmitting} type='submit'>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </Form>
    </Wrapper>
}

export default EditJob
