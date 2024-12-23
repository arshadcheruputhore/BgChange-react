import React, { useState } from 'react'
import './index.css'

function BtnContainer() {

    const [stateBtn1, setTextBtn1] = useState('CHANGE TO ORANGE')
    const [stateBtn2, setTextBtn2] = useState('CHANGE TO GREEN')
    const [stateBtn3, setTextBtn3] = useState('CHANGE TO VIOLET')

    const [bgActive1, setBg1] = useState('')
    const [bgActive2, setBg2] = useState('')
    const [bgActive3, setBg3] = useState('')

    const [btnActive1, setBtn1] = useState('')
    const [btnActive2, setBtn2] = useState('')
    const [btnActive3, setBtn3] = useState('')

    const changeBtn1 = () => {
        setBg2(prevState => prevState = '')
        setBg3(prevState => prevState = '')

        setTextBtn2(prevState => prevState = 'CHANGE TO GREEN')
        setTextBtn3(prevState => prevState = 'CHANGE TO VIOLET')

        if (stateBtn1 === 'CHANGE TO ORANGE') {
            setTextBtn1(prevState => prevState = 'CHANGE TO WHITE')
            setBg1(prevState => prevState = 'active1')

            setBtn1(prevState => prevState = 'active')
            setBtn2(prevState => prevState = 'active')
            setBtn3(prevState => prevState = 'active')
        }
        else {
            setTextBtn1(prevState => prevState = 'CHANGE TO ORANGE')
            setBg1(prevState => prevState = '')

            setBtn1(prevState => prevState = '')
            setBtn2(prevState => prevState = '')
            setBtn3(prevState => prevState = '')
        }
    }

    const changeBtn2 = () => {
        setBg1(prevState => prevState = '')
        setBg3(prevState => prevState = '')

        setTextBtn1(prevState => prevState = 'CHANGE TO ORANGE')
        setTextBtn3(prevState => prevState = 'CHANGE TO VIOLET')

        if (stateBtn2 === 'CHANGE TO GREEN') {
            setTextBtn2(prevState => prevState = 'CHANGE TO WHITE')
            setBg2(prevState => prevState = 'active2')

            setBtn1(prevState => prevState = 'active')
            setBtn2(prevState => prevState = 'active')
            setBtn3(prevState => prevState = 'active')
        }
        else {
            setTextBtn2(prevState => prevState = 'CHANGE TO GREEN')
            setBg2(prevState => prevState = '')

            setBtn1(prevState => prevState = '')
            setBtn2(prevState => prevState = '')
            setBtn3(prevState => prevState = '')
        }
    }

    const changeBtn3 = () => {
        setBg1(prevState => prevState = '')
        setBg2(prevState => prevState = '')

        setTextBtn1(prevState => prevState = 'CHANGE TO ORANGE')
        setTextBtn2(prevState => prevState = 'CHANGE TO GREEN')

        if (stateBtn3 === 'CHANGE TO VIOLET') {
            setTextBtn3(prevState => prevState = 'CHANGE TO WHITE')
            setBg3(prevState => prevState = 'active3')

            setBtn1(prevState => prevState = 'active')
            setBtn2(prevState => prevState = 'active')
            setBtn3(prevState => prevState = 'active')
        }
        else {
            setTextBtn3(prevState => prevState = 'CHANGE TO VIOLET')
            setBg3(prevState => prevState = '')

            setBtn1(prevState => prevState = '')
            setBtn2(prevState => prevState = '')
            setBtn3(prevState => prevState = '')
        }
    }

  return (
    <div>
        <section>
            <div className="container">
                <h1>Background Change</h1>

                <div className={`btnContainer ${bgActive1} ${bgActive2} ${bgActive3}`}>
                    <button type="button" className={`btn1 ${btnActive1}`} onClick={changeBtn1}>{stateBtn1}</button>
                    <button type="button" className={`btn2 ${btnActive2}`} onClick={changeBtn2}>{stateBtn2}</button>
                    <button type="button" className={`btn3 ${btnActive3}`} onClick={changeBtn3}>{stateBtn3}</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BtnContainer