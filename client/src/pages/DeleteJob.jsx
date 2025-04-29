import { toast } from "react-toastify";
import customAxios from "../utils/customAxios.jsx";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
    const { id } = params

    try {
        const { data } = await customAxios.delete(`/jobs/${id}`)
        toast.success(data.msg)
    } catch (e) {
        toast.error(e?.response?.data?.msg)
    }
    return redirect('../all-jobs')
}
