import React from 'react';
import capricorn from '../assets/images/capricorn.jpg'
import taurus from '../assets/images/taurus.jpg'
import aries from '../assets/images/aries.jpg'
import gemini from '../assets/images/gemini.jpg'
import cancer from '../assets/images/cancer.jpg'
import leo from '../assets/images/leo.jpg'
import virgo from '../assets/images/virgo.jpg'
import libra from '../assets/images/libra.jpg'
import scorpio from '../assets/images/scorpio.jpg'
import sagittarius from '../assets/images/sagittarius.jpg'
import aquarius from '../assets/images/aquarius.jpg'
import pisces from '../assets/images/pisces.jpg'
import {useNavigate} from "react-router-dom";
import s from './style.module.css'

export const AllSigns = [
    {
        signRuName: 'Овен',
        signEngName: 'Aries',
        period: '21.03 - 20.04',
        icon: aries
    },
    {
        signRuName: 'Телец',
        signEngName: 'Taurus',
        period: '21.04 - 20.05',
        icon: taurus
    },
    {
        signRuName: 'Близнецы',
        signEngName: 'Gemini',
        period: '21.05 - 20.06',
        icon: gemini
    },
    {
        signRuName: 'Рак',
        signEngName: 'Cancer',
        period: '21.06 - 22.07',
        icon: cancer
    },
    {
        signRuName: 'Лев',
        signEngName: 'Leo',
        period: '23.07 - 22.08',
        icon: leo
    },
    {
        signRuName: 'Дева',
        signEngName: 'Virgo',
        period: '23.08 - 22.09',
        icon: virgo
    },
    {
        signRuName: 'Весы',
        signEngName: 'Libra',
        period: '23.09 - 22.10',
        icon: libra
    },
    {
        signRuName: 'Скорпион',
        signEngName: 'Scorpio',
        period: '23.10 - 22.11',
        icon: scorpio
    },
    {
        signRuName: 'Стрелец',
        signEngName: 'Sagittarius',
        period: '23.11 - 21.12',
        icon: sagittarius
    },
    {
        signRuName: 'Козерог',
        signEngName: 'Capricorn',
        period: '22.12 - 19.01',
        icon: capricorn
    },
    {
        signRuName: 'Водолей',
        signEngName: 'Aquarius',
        period: '20.01 - 19.02',
        icon: aquarius
    },
    {
        signRuName: 'Рыбы',
        signEngName: 'Pisces',
        period: '20.02 - 20.03',
        icon: pisces
    },
]

export const ZodiacSigns = () => {
    const navigate = useNavigate()
    const handleClick = (sign: string) => {
        navigate(`/signs/${sign}`)
    }
    return (
        <div className={s.signs}>
            {AllSigns.map((sign, index) => (
                <div key={index}>
                    <img src={sign.icon} alt={sign.signEngName} onClick={() => handleClick(sign.signEngName)}/>
                </div>
            ))}
        </div>
    )
}