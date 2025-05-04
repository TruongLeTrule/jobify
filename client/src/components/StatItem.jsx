import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({ title,count,icon,color,bcg }) => {
    return <Wrapper color={color} bcg={bcg}>
        <header>
            <span className="title">{title}</span>
            <span className="count">{count}</span>
        </header>
        <span className="icon">{icon}</span>
    </Wrapper>
}

export default StatItem