import styles from './Input.module.css'

function Input({type, text, name, placehoder, handleOnChange, value}) {
    return(
        <div className={styles.form_control}>
            <lable hmtlFor={name}>{text}</lable>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placehoder={placehoder} 
                onchange={handleOnChange} 
                value={value}
            />
        </div>
    )
}

export default Input