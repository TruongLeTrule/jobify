import { Link } from 'react-router-dom'
import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Wrapper'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        I'm baby whatever YOLO small batch, schlitz jean shorts
                        mixtape flexitarian banh mi neutra. Unicorn four loko
                        man bun, gatekeep four dollar toast blackbird spyplane
                        polaroid bicycle rights. Lyft locavore distillery
                        freegan fit JOMO crucifix microdosing typewriter
                        gorpcore forage etsy.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt="job hunting" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing
