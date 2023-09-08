import FragmentDefault from "@shared/FragmentDefault/FragmentDefault";
import * as Styles from "./Orders.styles";

const Orders = () => {
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
                            <p>
                                Visualizar
                            </p>
                            <p>
                                Excluir
                            </p>
                        </div>
                    </Styles.OrderCard>
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
                            <p>
                                Visualizar
                            </p>
                            <p>
                                Excluir
                            </p>
                        </div>
                    </Styles.OrderCard>
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
                            <p>
                                Visualizar
                            </p>
                            <p>
                                Excluir
                            </p>
                        </div>
                    </Styles.OrderCard>
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
                            <p>
                                Visualizar
                            </p>
                            <p>
                                Excluir
                            </p>
                        </div>
                    </Styles.OrderCard>
                </Styles.ContentOrders>
            </Styles.OrdersContainer>
        </FragmentDefault>
    );
};

export default Orders;