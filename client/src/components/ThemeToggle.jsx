import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import Wrapper from '../assets/wrappers/ThemeToggle'
import { useDashboardContext } from '../pages/DashboardLayout'

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useDashboardContext()

    return (
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme ? (
                <BsSunFill className="toggle-icon" />
            ) : (
                <BsMoonFill className="toggle-icon" />
            )}
        </Wrapper>
    )
}
export default ThemeToggle
