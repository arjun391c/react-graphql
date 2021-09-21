import './signIn.styles.scss'
import { FormEvent, ChangeEvent, useState } from 'react'
//components
import FormInput from '../formInput/FormInput'
import Button from '../button/Button'
//utils
import { signInWithGoogle } from '../../utils/firebase'

interface ISignInData {
    email: string | "";
    password: string | "";
}

const SignIn: React.FC = () => {
    const [state, setState] = useState<ISignInData>({email: "", password: ""})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setState({ [name]: value, ...state})
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with you email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    label="Email"
                    value={state.email} 
                    type="email" 
                    handleChange={handleChange}
                    required 
                />
                <FormInput 
                    name="password" 
                    label="Password"
                    value={state.password} 
                    type="password"
                    handleChange={handleChange} 
                    required 
                />
                <div className="buttons">
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
