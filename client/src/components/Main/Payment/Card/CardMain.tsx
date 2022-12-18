import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { saveData, turnAround } from '../../../../reducers/cardReducer';

const CardMain = () => {
    const { cardName, cardNumber, cardUntil } = useAppSelector(state => state.card.cardData);
    const [cNumber, setCardNumber] = useState('');
    const [cUntil, setCardUntil] = useState('');
    const [cName, setCardName] = useState('');
    const [isDelete, setIsDelete] = useState<boolean>();

    const dispatch = useAppDispatch();

    const encodeBase64 = (data: string) => {
        return btoa(data);
        // return Buffer.from(data).toString('base64');
    }
    const decodeBase64 = (data: string) => {
        return atob(data);
        // return Buffer.from(data, 'base64').toString('ascii');
    }

    const saveDatas = () => {
        dispatch(turnAround());
        dispatch(saveData({
            cardName: (encodeBase64(cName)),
            cardNumber: (encodeBase64(cNumber)),
            cardUntil: (encodeBase64(cUntil))
        }))
    }

    useEffect(() => {
        if (cName === '') {
            setCardName(decodeBase64(cardName));
        }
        if (cNumber === '') {
            setCardNumber(decodeBase64(cardNumber));
        }
        if (cUntil === '') {
            setCardUntil(decodeBase64(cardUntil));
        }
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Delete' || e.key === "Backspace") {
                setIsDelete(false)
            } else {
                setIsDelete(true);
            }
        })
    }, [])

    return (
        <div className='col py-5 mb-5 cardBackground'>
            <div className='card cardMain row my-5'>
                <div className='mt-5 ms-5 pt-2'>
                    <input
                        value={cNumber}
                        onChange={(e) => {
                            if ((e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) && isDelete) {
                                e.target.value += '-';
                            }
                            if (e.target.value.length <= 19) {
                                setCardNumber(e.target.value)
                            }
                        }}
                        placeholder={'1234-1234-1234-1234'}
                        type={'text'}
                    />
                </div>
                <div className='py-0 ms-5 my-0 w-0'>
                    <input
                        list='data'
                        value={cUntil}
                        onChange={(e) => {
                            if (e.target.value.length === 2 && isDelete) {
                                e.target.value += '/';
                            }
                            if (e.target.value.length <= 5) {
                                setCardUntil(e.target.value)
                            }
                        }}
                        placeholder={'MM/YY'}
                    />
                </div>
                <input
                    className=''
                    type={'text'}
                    placeholder='NAME ON CARD'
                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                    value={cName}
                />
            </div>
            <div className='row text-center pt-5 me-4 cardMainButton '>
                <div className="col"></div>
                <Link className='col-2 mx-3 shopItemPageLink' to={'/payment/data'}>Back</Link>
                <button className='col-2 mx-3 shopItemPageLink' onClick={saveDatas}>Next</button>
            </div>
        </div>

    )
}

export default CardMain