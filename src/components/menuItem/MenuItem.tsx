import './menuItem.styles.scss'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface IMenuItem {
    title: string;
    imageUrl: string; 
    size?: string;
    linkUrl: string;
}

const MenuItem: React.FC<IMenuItem & RouteComponentProps> = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)