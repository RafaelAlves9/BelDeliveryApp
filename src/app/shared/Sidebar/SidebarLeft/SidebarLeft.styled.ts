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
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${props => (props.isOpen ? '0' : '-18.5rem')};
    background-color: #fff;
    border-right: 1px solid #bbbb;
    z-index: 999;
    overflow-x: hidden;
    animation: showSideBar .3s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @keyframes showSideBar {
        0%{
            opacity: 0;
            width: 0;
        }
        100%{
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
    background-color: rgb(0,0,0,0.1);

    &:not(:first-of-type){
        margin: .5rem 0;
    }
`;
export const NameContainer = styled.div`
    padding: 1.5rem 0;
    width: 100%;
    p{
        padding-left: 3rem;
        font-size: 1.2rem;

        >span{
            font-weight: 700;
        }
    }
`
export const ItemContainer = styled.ul`
    margin: 1rem 0;
    width: 100%;
    text-align: left;
`
export const Item = styled.li<{ isActive: boolean }>`
    padding: .7rem 0 .5rem 2.5rem;
    font-size: .95rem;
    font-weight: 550;
    color: gray;
    border-left: ${(props) => props.isActive ? ".5rem solid var(--green-main)" : ".5rem solid transparent" };
    cursor: pointer;
`
export const Logout = styled.div`
    margin: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    >svg{
        font-size: 1.5rem;
    }
    >p{
        font-size: 1.5rem;
        font-weight: 600;
    }
`