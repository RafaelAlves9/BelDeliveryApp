import { useAppSelector } from "@store/Store";
import * as styles from "./OrderModal.styles";
import { useDispatch } from "react-redux";
import { setIsModalOrderOpen } from "@store/reducers/order/orderSlice";

const OrderModal = () => {
    const { isModalOrderOpen } = useAppSelector((state) => state.orders);
    const dispatch = useDispatch();

    return(
        <styles.BgOrderModal isOpen={isModalOrderOpen}>
            <styles.CardModal>
                <div>
                    <div onClick={() => dispatch(setIsModalOrderOpen(false))}>
                        x
                    </div>
                </div>
            </styles.CardModal>
        </styles.BgOrderModal>
    );
};

export default OrderModal;