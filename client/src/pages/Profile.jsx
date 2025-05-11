import { FormRow } from '../components/index.js'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Form, useNavigation, useOutletContext, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import customAxios from '../utils/customAxios.jsx'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const avatar = formData.get('avatar')

  if (avatar?.size > 500000) {
    return toast.error('Avatar size should smaller than 0.5MB')
  }

  try {
    await customAxios.patch('/users/update', formData)
    return toast.success('Profile updated successfully')
  } catch (e) {
    return toast.error(e?.response?.data?.msg)
  }
}

const Profile = () => {
  const { email, lastName, location, name } = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return <Wrapper>
    <Form method="patch" className="form" encType="multipart/form-data">
      <header className="form-title">Profile</header>

      <div className="form-center">
        <div className="form-row">
          <label htmlFor="avatar" className="form-label">Choose images file (max 0.5MB)</label>
          <input type="file" name="avatar" id="avatar" className="form-input" accept="image/*"/>
        </div>
        <FormRow type="text" name="email" defaultValue={email}/>
        <FormRow type="text" name="location" defaultValue={location}/>
        <FormRow type="text" name="name" defaultValue={name}/>
        <FormRow type="text" name="lastName" labelText="last name" defaultValue={lastName}/>
        <button className="btn btn-block form-btn">
          {isSubmitting ? 'Submitting...' : 'Save changes'}
        </button>
      </div>
    </Form>
  </Wrapper>
}

export default Profile
