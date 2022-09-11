import styled from "styled-components";
export default function Header(){
    return(
        <Bar>
            <img src="imgs/ico-earth.svg" alt="" /> 
            <p>my travel journal.</p>
        </Bar>
    );
}

const Bar=styled.div`
    position: sticky;
    top: 0;
    background-color: #F55A5A;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        margin-left: 8px;
        color: white;
        font-size: 20px;
    }
    margin-bottom: 20px;
`;