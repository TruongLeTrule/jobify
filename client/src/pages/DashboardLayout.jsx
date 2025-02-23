import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { createContext, useContext, useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, SmallSidebar, Navbar } from '../components'
import { toast } from 'react-toastify'
import axios from '../utils/customAxios'

const DashboardContext = createContext()

export const loader = async () => {
  try {
    const { data } = await axios.get('/users/current')

    return data
  } catch (error) {
    toast.error('Please login first')
    return redirect('/login')
  }
}

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { user } = useLoaderData()
  const [showSidebar, setSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setSidebar(!showSidebar)
  }

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  const logoutUser = async () => {
    await axios.get('/auth/logout')
    navigate('/')
    toast.success('Logging out...')
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={user} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
