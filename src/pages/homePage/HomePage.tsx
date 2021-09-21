import './homepage.styles.scss'
//components
import DirectoryMenu from '../../components/directoryMenu/DirectoryMenu'

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <DirectoryMenu/>
        </div>
    )
}

export default HomePage
