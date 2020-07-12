import React, { useState } from 'react'

import './styles.scss'
import imgCVV from './../../assets/images/CVV.png'

const Payment = ({cards, cardsValue, setCardsValue }) => {

    const [activeCard, setActiveCard] = useState(1)
    const [toolTipActive, setToolTipActive] = useState(false)

    const onClickLinkActive = (id) => {
        setActiveCard(id)
        setCardsValue({
            number: '',
            month: '',
            year: '',
            name: '',
            cvv: '',
            validNumber: false,
            validMonth: false,
            validYear: false,
            validName: false,
            validCvv: false,
        })
    }

    const onChangeValue = (event) => {
        const value = event.target.value
        const name = event.target.name
        setCardsValue(() => validateValues(value, name))
    }

    const validateValues = (value, name) => {
        switch(name) {
            case 'month':
                return {
                    ...cardsValue,
                    [name]: value.replace(/[^\d]/g,''),
                    validMonth: value.length === 2,
                }
            case 'year':
                return {
                    ...cardsValue,
                    validYear: value.length === 2,
                    [name]: value.replace(/[^\d]/g,''),
                }
            case 'name':
                return {
                    ...cardsValue,
                    validName: value.length > 3 && value.length <= 40,
                    [name]: value.replace(/[^a-z\s]/gi, ''),
                }
            case 'cvv':
                return {
                    ...cardsValue,
                    validCvv: value.length === 3,
                    [name]: value.replace(/[^\d]/g,''),
                }
            default: 
                return cardsValue
        }
    }

    const validateCardNumbersValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        let cardNumber = value.replace(/\D/g, '')
        cardNumber = cardNumber !== '' ? cardNumber.match(/.{1,4}/g).join(' ') : ''
        setCardsValue({
            ...cardsValue,
            [name] : cardNumber,
            validNumber: value.length === 19,
        })
    }

    const openToolTip = () => {
        setToolTipActive(true)
    }
    const closeToolTip = () => {
        setToolTipActive(false)
    }

    return (
        <div className="payment">
            <div className="payment__nav">
                {cards.map(link => (
                    <span
                        key={link.id}
                        onClick={() => onClickLinkActive(link.id)}
                        className={activeCard === link.id ? 'payment__nav-link active' : 'payment__nav-link'}
                    >
                        {link.name}
                    </span>
                ))}
            </div>

            <div className="payment-card_wrap">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className={card.id === activeCard ? 'payment-card active' : 'payment-card'}
                    >
                        <div className="payment-card__left">
                            <div className="payment-card__input_wrap">
                                <label htmlFor="" className="payment-card__label">Card number</label>
                                <input 
                                    type="text" 
                                    className={cardsValue.validNumber ? 'payment-card__input' : 'payment-card__input error'}
                                    name="number"
                                    value={cardsValue.number}
                                    onChange={(event) => validateCardNumbersValue(event)}
                                    maxLength="19"
                                />
                            </div>
                            <div className="payment-card__input_wrap">
                                <label htmlFor="" className="payment-card__label">Valid thru (mm/yy)</label>
                                <div className="payment-card__input-date_wrap">
                                    <input 
                                        type="text" 
                                        className={cardsValue.validMonth ? 'payment-card__input' : 'payment-card__input error'}
                                        name="month" 
                                        value={cardsValue.month}   
                                        onChange={(event) => onChangeValue(event)} 
                                        maxLength="2"
                                    />
                                    <span>/</span>
                                    <input 
                                        type="text" 
                                        className={cardsValue.validYear ? 'payment-card__input' : 'payment-card__input error'}
                                        name="year" 
                                        value={cardsValue.year}   
                                        onChange={(event) => onChangeValue(event)} 
                                        maxLength="2"
                                    />
                                </div>
                            </div>
                            <div className="payment-card__input_wrap"> 
                                <label htmlFor="" className="payment-card__label">Cardholder's name</label>
                                <input 
                                    type="text" 
                                    className={cardsValue.validName ? 'payment-card__input' : 'payment-card__input error'}
                                    name="name"
                                    value={cardsValue.name}   
                                    onChange={(event) => onChangeValue(event)} 
                                />
                            </div>
                        </div>

                        <div className="payment-card__right">
                            <div className="payment-card__input_wrap">
                                <label htmlFor="" className="payment-card__label">CVV/CVC</label>
                                <div className="payment-card__cvv-wrap">
                                    <input 
                                        type="text" 
                                        className={cardsValue.validCvv ? 'payment-card__input' : 'payment-card__input error'}
                                        name="cvv"
                                        value={cardsValue.cvv}   
                                        onChange={(event) => onChangeValue(event)} 
                                        maxLength="3"
                                    />
                                    <span 
                                        className="payment-card__cvv-question"
                                        onMouseOver={openToolTip}
                                        onMouseLeave={closeToolTip}
                                    >
                                        ?
                                    </span>
                                    <div className="tooltip" className={toolTipActive ? 'tooltip active': 'tooltip'}>
                                        <div className="tooltip__inner">
                                            <p>CVV-код находится на тыльной стороне карты и включает в себя три цифры</p>
                                            <img src={imgCVV} alt="cvv"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Payment
