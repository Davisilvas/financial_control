import React from "react";
import ResumeCard from "../ResumeCards";
import * as C from './styles';
const Resume = () =>{
    return(
        <C.Container>
            <ResumeCard></ResumeCard>
            <ResumeCard></ResumeCard>
            <ResumeCard></ResumeCard>
        </C.Container>
    )
}

export default Resume;
