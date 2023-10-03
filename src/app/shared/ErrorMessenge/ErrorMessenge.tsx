import { IMessengeValidationResponse } from "@utils/ValitationSchema";
import styles from "./ErrorMessenge.module.css";
import { Fragment } from "react";

type Props = {
    validate: IMessengeValidationResponse;
    validateStatus?: boolean;
};

const ErrorMessenge = ({
    validate,
    validateStatus = false,
}: Props) => {
    return (
        <Fragment>
            {validateStatus && (
                <div className={styles.error}>
                    <p>{validate.messenge}</p>
                </div>
            )}
        </Fragment>
    );
};

export default ErrorMessenge;