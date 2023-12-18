import * as styles from "./ModalDefault.styles";

type props = {
    setOpenModal: Function;
    children: React.ReactNode;
};

const ModalDefault = ({ setOpenModal, children }: props) => {

    return(
        <styles.BgOrderModal>
            <styles.CardModal>
                <div onClick={() => setOpenModal(false)}>
                    x
                </div>
                <div>
                    {children}
                </div>
            </styles.CardModal>
        </styles.BgOrderModal>
    );
};

export default ModalDefault;
