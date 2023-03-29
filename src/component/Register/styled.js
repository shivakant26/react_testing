import styled from "styled-components";

export const InputField = styled.input.attrs({
    type:"text"
})`
padding: 9px 14px;
border:1px solid gray;
`;

export const RegiterButton = styled.button`
    background:${props=>props.primary ? '#ec6100' : 'black'};
    color:#fff;
    padding:9px 14px;
    width:150px;
    border:none;
    border-radius:5px;
    transition:.5s;
    position:relative;
    &:hover{
        background:black;
        transform:translateY(10px);
    }
`;