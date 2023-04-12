import React, { useEffect, useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import location2Icon from "../images/login/location2-ic.svg"
import categoryIcon from "../images/login/category-ic.svg"
import eyeIcon from "../images/login/eye.svg"
import { apiGet } from '@/api/api'
import timeArray from './time'
import Link from 'next/link'
import month from './month'

const AdminUsers = ({ api }) => {
    const [filter, setFilter] = useState('Orders.createdAt')
    const [orderBy, setOrderBy] = useState('asc')
    const [datas, setDatas] = useState([])

    const renderMonth = month?.map((m, index) => (
        <option value={index}>{m}</option>
    ))

    let renderYear = []
    for (let y = new Date().getFullYear(); new Date().getFullYear() - 20 < y; y--) {
        renderYear.push(y)
    }

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const loadData = () => {
        apiGet(`${api}/order/getstore`)
            .then(result => {
                if (!result.data.err) {
                    setDatas(result.data.stores)
                    console.log(result.data.stores)
                } else
                    console.log('err', result.data.err)
            })
    }
    const renderOrders = datas?.map((data) => {
        return (
            <>
                <div class="box-detailwork-recipient">
                    <a class="text-work text-start" href={`/showstoredetail?id=${data.email}`}>
                        <span>
                            <img class="icon-detailwork-recipient" src={location2Icon} alt="" />
                        </span>
                        {data.name}
                    </a>
                </div>
            </>
        )
    })

    useEffect(() => {
        loadData()
    }, [filter, orderBy])
    return (
        <>
            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">

                        <div class="box-tabs-work">
                            <div class="row d-flex">
                                <div class="col-4">
                                    <Link href="/neworder">
                                        <div class="btn btn-select-cancel w-100">ล่าสุด</div>
                                    </Link>
                                </div>
                                <div class="col-4">
                                    <Link href="/showtable">
                                        <div class="btn btn-select-confirm w-100">ร้านค้า</div>
                                    </Link>
                                </div>
                                <div class="col-4">
                                    <Link href="/showall">
                                        <div class="btn btn-select-cancel w-100">ทั้งหมด</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />
                        <div className='scroll-vertical'>
                            {renderOrders}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminUsers