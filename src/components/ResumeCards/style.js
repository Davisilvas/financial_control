import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    widith: 30%;

    @media(max-width: 750px){
        widith: 20%;

        p{
            font-size:12px;
        }

        span{
            font-size:20px;
        }

        svg{
            display:none;
        }
    }
`;