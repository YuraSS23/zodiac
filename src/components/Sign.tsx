import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {api} from "../api/api";

type SignPropsType = {
    signRuName: string
    signEngName: string
    period: string
    icon: string
}

export const Sign = (props: SignPropsType) => {
    const [horoscope, setHoroscope] = useState<any>()
    const navigate = useNavigate()
    useEffect(()=> {
        api.postSigns({sign: props.signEngName,
            language: 'translated',
            period: 'today'}
        ).then(data => setHoroscope(data))
    })
    return (
        <div>
            <b>{props.signEngName}</b>
            <p>{props.period}</p>
            <img src={props.icon} alt={props.signEngName} width={'100px'} height={'100px'}/>
            <div>{horoscope}</div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}