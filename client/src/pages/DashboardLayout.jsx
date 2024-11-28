import { Outlet } from 'react-router-dom'
import { createContext, useContext, useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, SmallSidebar, Navbar } from '../components'

const DashboardContext = createContext()

const DashboardLayout = ({isDarkThemeEnabled}) => {
    const user = { name: 'Truong' }
    const [showSidebar, setSidebar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)

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
        console.log('User logged out')
    }

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleSidebar,
                toggleDarkTheme,
                logoutUser
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
