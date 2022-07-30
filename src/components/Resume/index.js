import React from "react";
import ResumeCard from "../ResumeCards";
import * as C from './styles';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = (props) =>{
    return(
        <C.Container>
            <ResumeCard title="Entradas" Icon={FaRegArrowAltCircleUp} 
            value={props.income} />
            <ResumeCard title="Saídas" Icon={FaRegArrowAltCircleDown}
            value={props.expense} />
            <ResumeCard title="Total" Icon={FaDollarSign} 
            value={props.total}/>
        </C.Container>
    )
}

export default Resume;
