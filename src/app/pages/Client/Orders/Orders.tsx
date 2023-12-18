import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./Orders.styles";
import { useDispatch } from "react-redux";
import { setIsModalOrderOpen } from "@store/reducers/order/orderSlice";
import ModalOrder from "./ModalOrder/ModalOrder";
import { useState } from "react";

const Orders = () => {
    const [openModal, setOpenModal] = useState(true);
    const dispatch = useDispatch();

    return(
        <FragmentDefault>
            <Styles.OrdersContainer>
                <h1>Meus pedidos</h1>
                <h2>Histórico</h2>
                <Styles.ContentOrders>
                    <Styles.OrderCard>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p>Japa Bel</p>
                                <p>pedido concluído</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p><span>2</span> Itens incluídos</p>
                        </div>
                        <hr />
                        <div>
                            <p onClick={() => setOpenModal(true)}>
                                Visualizar
                            </p>
                            <p>
                                Excluir
                            </p>
                        </div>
                    </Styles.OrderCard>
                </Styles.ContentOrders>
            </Styles.OrdersContainer>

            {openModal && <ModalOrder setOpenModal={setOpenModal} />}
        </FragmentDefault>
    );
};

export default Orders;