import React, {useState} from 'react';
import { Payment, Terms, SubmitBtn } from './components'

function App() {

  const initialState = {
    cards: [
      { id: 1, name: 'Credit card' },
      { id: 2, name: 'Gift card' },
      { id: 3, name: 'PayPal' },
    ],
    cardsValue: {
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
    },
    termsChecked: false,
    successSubmit: false,
    errorSubmit: false
  }

  const [cards] = useState(initialState.cards)
  const [cardsValue, setCardsValue] = useState(initialState.cardsValue)
  const [termsChecked, setTermsChecked] = useState(initialState.termsChecked)
  const [successSubmit, setSuccessSubmit] = useState(initialState.successSubmit)
  const [errorSubmit, setErrorSubmit] = useState(initialState.errorSubmit)

  const onSubmit = () => {
    checkValidate()
  }
  
  const checkValidate = () => {
    if(cardsValue.validNumber && cardsValue.validMonth && cardsValue.validYear
        && cardsValue.validName && cardsValue.validCvv && termsChecked) {
          setSuccessSubmit(true)
          setErrorSubmit(false)
          setTimeout(() => {
            setSuccessSubmit(false)
          }, 2000)

      } else {
        setErrorSubmit(true)
        setSuccessSubmit(false)
        setTimeout(() => {
          setErrorSubmit(false)
        }, 2000)
      }
  }


  return (
    <div className="app">
      <h1 className="app__title">Checkout</h1>

      <div className="app__item">
        <h2 className="app__item-title">Products</h2>
        <div className="inner-list">
          <div className="inner-list__item">
            <a href="">Apple MacBook Pro 16" 8 Core i9</a>
            <span>$499.00</span>
          </div>
          <div className="inner-list__item">
            <a href="">Apple iPhone 11 Pro Max, 256 ГБ</a>
            <span>$130.00</span>
          </div>
        </div>
      </div>

      <div className="app__item">
        <h2 className="app__item-title">Shipping method</h2>
        <div className="inner-list">
          <div className="inner-list__item">
            <span>FedEx</span>
            <span>$130.00</span>
          </div>
        </div>
      </div>

      <div className="app__item">
        <h2 className="app__item-title">Payment method</h2>
        <Payment 
          cards={cards} 
          cardsValue={cardsValue} 
          setCardsValue={setCardsValue}/>
      </div>

      <Terms 
        termsChecked={termsChecked} 
        setTermsChecked={setTermsChecked}/>

      <SubmitBtn onSubmit={onSubmit}/>

      {successSubmit && <span className="submit-status success">Success!</span>}
      {errorSubmit && <span className="submit-status error">Error!</span>}
    </div>

  );
}

export default App;
