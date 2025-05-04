import customAxios from "../utils/customAxios";
import { toast } from 'react-toastify'
import { redirect,useLoaderData } from "react-router-dom";
import Wrapper from '../assets/wrappers/StatsContainer'
import { StatItem } from "../components/index";
import { FaUserFriends, FaHandPaper } from 'react-icons/fa'

export const loader = async () => {
    try {
        const { data } = await customAxios.get('/admin/app-stats')
        return data
    } catch (e) {
        toast.error(e.response.data.msg)
        return redirect('/dashboard')
    }
}

const Admin = () => {
    const { users,jobs } = useLoaderData()

    return <Wrapper>
        <StatItem title='Current Users' icon={<FaUserFriends/>} count={users} color='#42dced' bcg='#4e7478'/>
        <StatItem title='Current Jobs' icon={<FaHandPaper/>} count={jobs} color='#deab45' bcg='#85775d'/>
    </Wrapper>
}

export default Admin
