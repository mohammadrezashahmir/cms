import axios from 'axios'
import React, {useContext, useEffect, useState,} from 'react'
import {Link, useParams} from 'react-router-dom'
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {LiaTimesCircle} from "react-icons/lia";
import {AuthContext} from "../../context/AuthContext";


function ActivateAccount() {
    const {code} = useParams()
    const [contentMsg, setContentMsg] = useState(null)
    const {login} = useContext(AuthContext)
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BASE_URL}/user/activate/${code}/`)
            .then(res => {
                login(res.data.access,res.data.refresh)
                setContentMsg(
                    <div className='box p-3 md:2/5 mx-auto my-10  flex justify-center items-center flex-col'>
                        <div>
                            <IoIosCheckmarkCircleOutline size='50px' color='green'/>
                        </div>
                        <h2 className='font-medium text-xl mt-3'>فعال سازی حساب کاربری</h2>
                        <div className='my-10'>
                            <p>
                                {res.data.details}
                            </p>
                        </div>
                        <Link className='btn btn-primary' to='/'>بازگشت به صفحه اصلی</Link>
                    </div>
                )
            })
            .catch((error) => {
                setContentMsg(
                    <div className='box p-3 md:2/5 mx-auto my-10  flex justify-center items-center flex-col'>
                        <div>
                            <LiaTimesCircle size='50px' color='red'/>
                        </div>
                        <h2 className='font-medium text-xl mt-3'>خطا در فعال سازی حساب</h2>
                        <div className='my-10'>
                            <p>
                                در فعال سازی حساب شما مشکلی پیش آمد
                            </p>
                            <p>
                                {error.code}, {error.message}
                            </p>
                        </div>
                        <Link className='btn btn-primary' to='/'>بازگشت به صفحه اصلی</Link>
                    </div>
                )
            })
    }, [code])
    return (
        <div>
            {contentMsg}
        </div>
    )
}

export default ActivateAccount
