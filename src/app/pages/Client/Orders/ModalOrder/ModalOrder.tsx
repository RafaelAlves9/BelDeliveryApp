import ModalDefault from "@shared/ModalDefault/ModalDefault";
import * as styles from "./ModalOrder.styles";

type props = {
    setOpenModal: Function;
};

const ModalOrder = ({ setOpenModal }: props) => {

    return(
        <ModalDefault setOpenModal={setOpenModal}>
            <styles.Content>
            
            </styles.Content>
        </ModalDefault>
    );
};

export default ModalOrder;
