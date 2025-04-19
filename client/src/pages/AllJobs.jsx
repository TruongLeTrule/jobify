import { toast } from 'react-toastify'
import { useLoaderData } from "react-router-dom";
import { createContext,useContext } from "react";
import customAxios from "../utils/customAxios.jsx";
import { SearchContainer,JobsContainer } from "../components/index.js";

export const loader = async ({ request }) => {
    try {
        const { data } = await customAxios.get('/jobs')
        return { data }
    } catch (e) {
        toast.error(e?.respond?.data?.msg)
        return e
    }
}

const AllJobsContext = createContext()

const AllJobs = () => {
    const { data } = useLoaderData()

    return (
        <AllJobsContext.Provider value={{ data }}>
            <SearchContainer/>
            <JobsContainer/>
        </AllJobsContext.Provider>
    )
}

export default AllJobs
export const useAllJobsContext = () => useContext(AllJobsContext)
