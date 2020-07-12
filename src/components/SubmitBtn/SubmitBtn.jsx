import React from 'react'
import './styles.scss'


const SubmitBtn = ({onSubmit}) => {
    return (
        <button onClick={onSubmit} className="submit-btn">Place order ($624.99)</button>
    )
}

export default SubmitBtn
