import React, { useEffect, useState } from 'react'
import { apiPost } from '@/api/api'
import minuteForm from './minuteForm'
import month from './month'

const OrderDetail = ({ api, id, role, prev }) => {
    const [datas, setDatas] = useState({})
    const loadData = () => {
        apiPost(`${api}/order/getorder`, { id: id })
            .then(result => {
                if (!result.data.err) {
                    setDatas(result.data.order)
                    console.log(result.data.order)
                } else {
                    console.log('err')
                }
            })
    }
    const approveClick = () => {
        apiPost(`${api}/order/approve`, {
            id: id
        }).then(result => {
            if (!result.data.err)
                window.location.href = '/noti'
            else
                alert('ไม่สำเร็จ')
        })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <section class="sec-boxhead-work">
                <div class="container">
                    <div class="boxhead-work text-center">
                        <p class="texthead-work">
                            แหล่งกำเนิดขยะอาหาร
                        </p>
                    </div>
                </div>
            </section>

            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">

                        <p class="texthead-work text-center">
                            รายละเอียดข้อมูลขยะอาหาร
                        </p>

                        <div class="box-contact-detail-recipient">
                            <p class="text-work text-start mb-2">
                                ข้อมูลติดต่อ
                            </p>
                            <p class="text-work text-start mb-2">
                                <span>
                                    <img class="icon-detailwork-recipient" src="../images/detail-work-create/loca-1-ic.svg" alt="" />
                                </span>
                                {datas.name}
                            </p>
                            <p class="text-work text-start mb-2">
                                <span>
                                    <img class="icon-detailwork-recipient" src="../images/detail-work-create/loca-2-ic.svg" alt="" />
                                </span>
                                {datas.address}
                            </p>
                            <p class="text-work text-start mb-2">
                                <span>
                                    <img class="icon-detailwork-recipient" src="../images/detail-work-create/tel-ic.svg" alt="" />
                                </span>
                                {datas.phone}
                            </p>
                            <p class="text-work text-start mb-2">
                                <span>
                                    <img class="icon-detailwork-recipient" src="../images/detail-work-create/time-ic.svg" alt="" />
                                </span>
                                {`${new Date(datas.start_date).getDate()} ${month[new Date(datas.start_date).getMonth()]} เวลา ${new Date(datas.start_date).getHours()}.${minuteForm(new Date(datas.start_date).getMinutes())}-${new Date(datas.to_date).getDate() != new Date(datas.end_date).getDate() && `${new Date(datas.end_date).getDate()} ${month[new Date(datas.end_date).getMonth()]}`} ${new Date(datas.end_date).getHours()}.${minuteForm(new Date(datas.end_date).getMinutes())}น.`}
                            </p>
                        </div>



                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        อาหารใกล้หมดอายุ
                                    </p>
                                </div>
                                <div class="col-6">
                                    <div class="col d-flex align-items-center justify-content-end">
                                        <span class="">
                                            <p class="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div class="boxtext-kg">
                                            <div class="boxwork-weight-data">{datas.weight}</div>
                                        </div>
                                        <span class="">
                                            <p class="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-create-detail">
                            <p class="text-work text-start">
                                รูปภาพประกอบและคำอธิบาย
                            </p>
                            <div class="box-upload-detail">
                                <div class="row">
                                    <div class="col-6">
                                        {datas.image1 &&
                                            <img class="box-image-description-detail " src={`${api}/img/${datas.image1}`} alt="" />
                                        }
                                    </div>
                                    <div class="col-6">
                                        {datas.image2 &&
                                            <img class="box-image-description-detail " src={`${api}/img/${datas.image2}`} alt="" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <p class="text-work text-start">
                                คำอธิบาย
                            </p>
                            <div class="box-inputtext-description-detail">
                                <p>
                                    {datas.description}
                                </p>
                            </div>
                        </div>
                        <hr class="hr-bigbox-work" />
                        <div class="bigbox-receive">
                            <div class="row">
                                <div class={`col-${role != 3 ? '6' : '12'}`}>
                                    <a class="btn btn-undo-detail" href={prev}>
                                        ย้อนกลับ
                                    </a>
                                </div>
                                {role != 3 &&
                                    <div class="col-6">
                                        <button type="button" class="btn btn-create-work w-100" data-bs-toggle="modal" data-bs-target="popup-confirm-receive" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'block'}>
                                            รับขยะ
                                        </button>
                                    </div>
                                }
                                <div class="modal" id="popup-confirm-receive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>
                                                    <img src="../images/work-create/ic-close.svg" alt="" />
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p class="texthead-confirm-create text-center">
                                                    ยืนยันการรับขยะ
                                                </p>
                                                <div class="box-select-confirm d-flex justify-content-evenly  align-items-center">
                                                    <div class="col-btn-select-confirm">
                                                        <button type="button" class="btn btn-select-cancel" data-bs-dismiss="modal" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>ยกเลิก</button>
                                                    </div>
                                                    <div class="col-btn-select-confirm">
                                                        <button type="button" class="btn btn-select-confirm" onClick={approveClick}>ยืนยัน</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderDetail