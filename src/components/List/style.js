import styled from "styled-components";

export const StyledList = styled.div `

    background-color: white;
    max-width: 600px;
    padding: 30px;
    border-radius: 10px;

    box-shadow: 5px 5px 10px #dddddd;
    box-sizing: border-box;

    margin: 40px auto; //centraliza a div, neste caso 

    form {
        display: flex;
        justify-content: space-between;

        input {
            flex-grow: 1;
            height: 54px;
            border-radius: 5px;
            border: solid 1px #cccccc;
            box-sizing: border-box;
            padding:10px;
        }

        button {
            background-color:#001d29;
            color: #ffffff;
            border:none;
            width: 105px;
            margin-left:10px;
            border-radius:5px;
            cursor: pointer;

           &:hover{
            background-color:darkgray;
           }
           &:disabled{
            background-color:lightgray;
           }

        }
    }

    
`