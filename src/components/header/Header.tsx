import './header.styles.scss'
import { Link } from 'react-router-dom'
//assets
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg'
//utils
import { auth } from '../../utils/firebase'

interface IHeader {
    currentUser: {} | null;
}

const Header: React.FC<IHeader> = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ? 
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :   <Link className="option" to="/signin">SIGN IN</Link>
                }
                <Link className="option" to="/cart">
                    <CartLogo className="logo"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
