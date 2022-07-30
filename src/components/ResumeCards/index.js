import React from "react";
import * as C from "./style"

const ResumeCard = (props) =>{
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{props.title}</C.HeaderTitle>
                <props.Icon></props.Icon>
            </C.Header>
            <C.Total>{props.Total}</C.Total>
        </C.Container>
    )
}

export default ResumeCard;