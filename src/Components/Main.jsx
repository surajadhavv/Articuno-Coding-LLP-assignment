import React from 'react'
import './Main.css'
import { GrCart } from 'react-icons/gr';
import { TbTruckDelivery } from 'react-icons/tb'
import paypal from '../Assets/paypal-logo.png'
import visa from '../Assets/visa_logo_grey.png'
import mastercard from '../Assets/mastercard.png'
import mastro from '../Assets/mastro.png'
import discover from '../Assets/Discover-Logo.jpg'
import deal from '../Assets/deal.png'
import inpost from '../Assets/inpost-logo.png'
import dpd from '../Assets/dpd-logo.jpg'
import dhl from '../Assets/DHL-Logo.svg'
import fedex from '../Assets/fedex-logo.png'
import whitetee from '../Assets/white-tee.png'
import blacktee from '../Assets/black-tee.png'

const Main = () => {
    return (
        <div className='main'>
            <div className="left-main">

                <h4>Shipping and Payment</h4>

                <div className="buttons">
                    <button className='btn1'>Log in</button>
                    <button className='btn2'>Sign up</button>
                </div>

                <p>Shopping Information</p>

                <form action="">
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='Last name' />
                    <input type="text" placeholder='Postal code/ZIP' />
                    <input type="text" placeholder='Phone number' />
                    <select>
                        <option value="volvo">Poland         </option>
                        <option value="saab">India</option>
                        <option value="opel">Germany</option>
                        <option value="audi">Canada</option>
                    </select>
                </form>

            </div>
            <div className="right-main">

                <h4 className="icons">
                    <div className="cart"><GrCart /></div>
                    <div className="line"></div>
                    <div className="truck"><TbTruckDelivery /></div>
                </h4>

                <div className="billing">

                    <div className="payment">

                        <div className="pay">
                            <h5>Payment Method</h5>
                            <div className="options">
                                <div className="option">
                                    <img src={paypal} alt="" />
                                </div>
                                <div className="option">
                                    <img src={visa} alt="" />
                                </div>
                                <div className="option">
                                    <img src={mastercard} alt="" />
                                </div>
                                <div className="option">
                                    <img src={mastro} alt="" />
                                </div>
                                <div className="option">
                                    <img src={discover} alt="" />
                                </div>
                                <div className="option">
                                    <img src={deal} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Delivery">
                            <h5>Delivery Method</h5>
                            <div className="d-options">
                                <div className="d-option">
                                    <img src={inpost} alt="" />$20.00
                                </div>
                                <div className="d-option">
                                    <img src={dpd} alt="" />$12.00
                                </div>
                                <div className="d-option">
                                    <img src={dhl} alt="" />$15.00
                                </div>
                                <div className="d-option">
                                    <img src={fedex} alt="" />$10.00
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="cart-payment">
                        <h5>Your Cart</h5>

                        <div className="order">
                            <div className="order-image"><img src={whitetee} alt="" /></div>
                            <span className='order-name'>T-shirt summer vives<p>#213567</p></span>
                            <p className='price'>$89.99</p>
                        </div>
                        <div className="order">
                            <div className="order-image"><img src={blacktee} alt="" /></div>
                            <span className='order-name'>T-shirt summer vives<p>#213567</p></span>
                            <p className='price'>$69.99</p>
                        </div>

                        <div className="total">
                            <p>Total Cost</p>
                            <p>$159,89</p>
                        </div>

                        <div className="shipping-detail">
                            <p className='icon-truck'><TbTruckDelivery /></p>
                            <p>You are <b>$30,02</b> away from free shipping</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main