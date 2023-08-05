import styles from './cusTextField.module.scss';
import { TextField } from '@mui/material';
const CusTextField = ({ label, name, value, onChange, error, errormsg, ...rest }) => {
    return (
        <div className={styles.fieldwrapper}>
            <TextField
                className={styles.field}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                error={error}
                {...rest}
            />
            {error ? <div className={styles.errormsg}>{errormsg}</div> : null}
        </div>
    );
};
export default CusTextField;
