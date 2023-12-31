import React from "react";
import * as Styled from "./Loading.styled";
import { useAppSelector } from "@store/Store";
import LoadingGif from "@assets/loading.gif";

type props = {
    isLoadingParam?: boolean;
};

const Loading = ({ isLoadingParam = false }: props) => {
    const { isLoading } = useAppSelector((state) => state.loading);

    return(
        <React.Fragment>
            <Styled.BgLoading isOpen={isLoading || isLoadingParam}>
                <Styled.Gif src={LoadingGif} alt="" />
            </Styled.BgLoading>
        </React.Fragment>
    );
};

export default Loading;