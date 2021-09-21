import { ButtonHTMLAttributes, ReactChild } from 'react'
import './button.styles.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactChild;
    isGoogleSignIn?: boolean;    
}

const Button: React.FC<IButton> = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button
