import { ChangeEventHandler, InputHTMLAttributes } from 'react'
import './formInput.styles.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<IInputProps> = ({handleChange, label, ...otherProps}) => {

    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            {
                label ? 
                    <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>
                : null
            }
        </div>
    )
}

export default FormInput
