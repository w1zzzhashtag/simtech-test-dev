import React, { useState, useRef } from 'react'
import './styles.scss'


const Terms = ({ termsChecked, setTermsChecked }) => {
    const [activePopup, setActivePopup] = useState(false)
    const popupWrap = useRef()
    const popupBtn = useRef()

    const onClickOpenPopup = () => {
        setActivePopup(true)
    }

    const onClickClosePopup = (event) => {
        if(event.target === popupWrap.current || event.target === popupBtn.current) {
            setActivePopup(false)
        }
    }

    const onChangeTermsChecked = () => {
        setTermsChecked(!termsChecked)
    }

    return (
        <div className="app__item terms">
            <input
                id="terms"
                type="checkbox"
                checked={termsChecked}
                onChange={onChangeTermsChecked} />
            <div className="terms__text">
                <label htmlFor="terms" className="terms__text-label">
                    I accept the
                </label>
                <span
                    className="terms__text-link"
                    onClick={onClickOpenPopup}
                >
                    Terms and Conditions
                </span>
                <div 
                    className={activePopup? 'terms__popup_wrap active' : 'terms__popup_wrap'} 
                    ref={popupWrap}
                    onClick={onClickClosePopup}
                >
                    <div className="terms__popup">
                        <h6>Terms and Conditions</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis dolore eos ipsa architecto porro necessitatibus non, minima laboriosam esse distinctio earum ducimus repudiandae dolorem perferendis? Nemo, voluptatum et! Natus?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis dolore eos ipsa architecto porro necessitatibus non, minima laboriosam esse distinctio earum ducimus repudiandae dolorem perferendis? Nemo, voluptatum et! Natus?</p>
                        <span ref={popupBtn} className="terms__popup-btn">&times;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
