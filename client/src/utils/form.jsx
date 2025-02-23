import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'
import axios from './customAxios'

export const postForm = async ({
  request,
  postUrl,
  successMsg,
  redirectPath,
}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const errors = { msg: '' }

  if (data?.password?.length < 3) {
    errors.msg = 'Password is too short'
    return errors
  }

  try {
    await axios.post(postUrl, data)
    toast.success(successMsg)
    return redirectPath ? redirect(redirectPath) : null
  } catch (error) {
    errors.msg = error?.response?.data?.msg
    return errors
  }
}
