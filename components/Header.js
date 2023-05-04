import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiGet, apiPost } from '@/api/api'

function Header({ api }) {
    const [token, setToken] = useState(null)
    const [count, setCount] = useState(0)
    const role = typeof window !== 'undefined' ? window?.localStorage.getItem('role') : null
    useEffect(() => {
        setToken(typeof window !== 'undefined' ? window.localStorage.getItem('token') : null)
        apiGet(`${api}/notification/header`)
            .then(result => {
                if (!result?.data?.err) {
                    setCount(result?.data?.count)
                } else
                    console.log('err', result.data.err)
            })
    }, [])
    return (
        <nav class="navbar">
            <Link class="nav-logo" href="/" style={{marginLeft:"100px"}}>
                <img src="./images/nav/logo.png " alt="" />
            </Link>
            <div class="box-bt-nav">
                {token ? <>
                    <Link href='/neworder'>
                        <button class="btn bt-main text-white " style={{marginLeft:"10px"}}>{role == 1 ? 'สร้างงาน' : role == 2 ? 'รับขยะ' : 'ตรวจสอบ'}</button>
                    </Link>
                    <Link href='/noti'>
                        <button class="btn bt-secon " style={{marginLeft:"10px"}}>
                            <img src="./images/nav/bel.png" alt="" />
                            {count > 0 &&
                                <p className='noti'>{count}</p>
                            }
                        </button>
                    </Link>
                    <Link href='/account'>
                        <button class="btn bt-secon " style={{marginRight:"100px",marginLeft:"10px"}}><img src="./images/nav/account.png" alt="" /></button>
                    </Link>
                </> :
                    <Link href='/login'>
                        <button class="btn bt-main text-white " style={{marginRight:"100px"}}>Login</button>
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Header