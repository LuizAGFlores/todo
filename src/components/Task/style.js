import styled from "styled-components";

export const StyledTask = styled.div `

    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #cccccc;
    color: #666666;

    button {
            background: transparent;
            border:none;
            color: #ff5555;
            width:auto;
            font-size: 30px;
           cursor: pointer;

           &:hover{
            color: darkred;
           }

        }

   
`