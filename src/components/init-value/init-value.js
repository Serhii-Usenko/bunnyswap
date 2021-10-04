import React, {useState} from 'react';
import './init-value.css';

const InitValue = () => {

    const [initData, setInitData] = useState(null)
    const [initData2, setInitData2] = useState(null)
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [sellCarrotIt, setSellCarrotIt] = useState(null);
    const [buyCarrotIt, setbuyCarrotIt] = useState(null);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    function getInitData(event) {
        setShow(false)
        setInitData(event.target.value)
    };
    
    function getInitData2(event) {
        setShow(false)
        setInitData2(event.target.value)
    };
    
    function getData(event) {
        setShow(false)
        setData(event.target.value)
    };

    function getData2(event) {
        setShow(false)
        setData2(event.target.value)
    };

    function sellCarrot(event) {
        setShow(false)
        setSellCarrotIt(event.target.value)
    };
    
    function buyCarrot(event) {
        setShow(false)
        setbuyCarrotIt(event.target.value)
    };

    const k = parseInt(initData) * parseInt(initData2)
    
    const sellingCarrot = ((k / (data - sellCarrotIt)) - data2);
    const buyingCarrot = (data2 - (k / (+data + +buyCarrotIt)))

    return (
        <div className="swap" id="product">
            <h2 className="swap__title">BunnySwap</h2>
            <div className="swap__init">
                <input type="text" placeholder="Yours initial ICP" className="swap__init-first" onChange={getInitData} required/>
                <input type="text" placeholder="Yours initial Carrots" className="swap__init-second" onChange={getInitData2} required/>
            </div>
            <div>
                <div> 
                    <form className="swap__inputs">
                        <input className="swap__buy" type="text" placeholder="Your ICP" onChange={getData} required/>
                        <input className="swap__buy" type="text" placeholder="Your Carrots" onChange={getData2} required/>
                        <input className="swap__buy" type="text" placeholder="Buy ICP" onChange={sellCarrot} required/>
                        <button className="swap__buy-button" type="button" onClick={() => setShow(true)}>Submit</button>
                    </form>
                </div>
                <div className="swap__inputs-result">buy {sellCarrotIt} icp will cost: { show ? <span className="color-result">{sellingCarrot + " carrots." }</span> : null}</div>
            </div>
            <div>
                <div className="swap__inputs">
                    <input className="swap__sell" type="text" placeholder="Your ICP" onChange={getData} required/>
                    <input className="swap__sell" type="text" placeholder="Your Carrots" onChange={getData2} required/>
                    <input className="swap__sell" type="text" placeholder="Sell ICP" onChange={buyCarrot} required/>
                    <button className="swap__sell-button" type="button" onClick={() => setShow2(true)}>Submit</button>
                </div>
                <div className="swap__inputs-result">when selling {buyCarrotIt} ICP you will receive: { show2 ? <span className="color-result">{buyingCarrot + " carrots." }</span> : null}</div>
            </div>
        </div>
    )
}

export default InitValue;