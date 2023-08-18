import styled from "styled-components";

export const BgBar = styled.div<{isOpen: boolean}>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0,0,0,0.400);
    z-index: 99;
    display: ${(props)=> props.isOpen ? "block" : "none"};
`;
export const ContainerBar = styled.div<{isOpen: boolean}>`
    width: 18rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => (props.isOpen ? '0' : '-250px')};
    background-color: #fff;
    border-right: 1px solid #bbbb;
    z-index: 999;
    overflow-x: hidden;
    animation: showSideBar .4s;

    display: flex;
    flex-direction: column;

    p{
        padding-left: 3rem;
        font-size: 1.1rem;
        font-weight: 500;
    }
    
    @keyframes showSideBar {
        from{
            opacity: 0;
            width: 0;
        }
        to{
            opacity: 1;
            width: 18rem;
        }
    }
`;
export const Header = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 3.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 4rem;
    }
    span{
        padding-top: .8rem;
        color: gray; 
        font-size: 1.5rem;
        cursor: pointer;
        height: fit-content;
    }
`;
export const Line = styled.span`
    margin-bottom: .5rem;
    width: 100%;
    height: .05rem;
    background-color: #bbbbbb;

    &:not(:first-of-type){
        margin: .5rem 0;
    }
`;
export const ItemContainer = styled.div`
    margin: 1rem 0;
    width: 100%;
    text-align: left;
`
export const Item = styled.div<{ isActive: boolean }>`
    padding: .5rem 0 .5rem 2.5rem;
    font-size: 1rem;
    font-weight: 550;
    color: gray;
    border-left: ${(props) => props.isActive ? ".5rem solid var(--green-main)" : ".5rem solid transparent" };
    cursor: pointer;
`