import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { FormRow, FormSelect } from '../components'
import { useDashboardContext } from '../pages/DashboardLayout'
import { JOB_TYPE, JOB_STATUS } from '../../../utils/constants'
import { postForm } from '../utils/form'

export const action = async ({ request }) => {
  return await postForm({
    request,
    postUrl: '/jobs',
    successMsg: 'Job added successfully',
    redirectPath: '/dashboard/all-jobs',
  })
}

const AddJob = () => {
  const { user } = useDashboardContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add job</h4>
        <div className="form-center">
          <FormRow type="text" name="company" />
          <FormRow type="text" name="position" />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job location"
            defaultValue={user.location}
          />
          <FormSelect
            name="jobType"
            labelText="Job type"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <FormSelect
            name="jobStatus"
            labelText="Job status"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
        <button
          type="submit"
          className="btn btn-block form-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        </div>
      </Form>
    </Wrapper>
  )
}

export default AddJob
