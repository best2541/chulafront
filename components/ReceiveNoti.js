import React from 'react'
import month from './month'
import minuteForm from './minuteForm'
import { apiPost } from '@/api/api'

const ReceiveNoti = ({ datas, setDatas, api }) => {
    const toggleClick = (event) => {
        event.target.classList.toggle('collapsed')
        const id = event?.target?.getAttribute('data-bs-target')
        const ele = document.getElementById(id)
        ele?.classList.toggle('show')
    }
    const approve = (id) => {
        apiPost(`${api}/order/edit`, {
            id: id,
            status: 4
        }).then(result => {
            if (!result.data.err)
                window.location.reload()
        })
    }
    const cancle = (id) => {
        apiPost(`${api}/order/edit`, {
            id: id,
            status: 1,
            to_user: ''
        }).then(result => {
            if (!result.data.err)
                window.location.reload()
        })
    }

    const renderNoti = datas?.map((data, index) => (
        <>
            <div class="accordion-item acd-item-noti">
                <h2 class="accordion-header acd-header-noti">
                    <button class="accordion-button acd-btn-noti" type="button" data-bs-toggle="collapse" data-bs-target={`panelsStayOpen-collapseOne-noti${index}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" onClick={(event) => toggleClick(event)}>
                        {data.category == 1 ? 'อาหารใกล้หมดอายุ' : data.category == 2 ? 'เศษอาหาร' : data.category == 3 ? 'เศษผักผลไม้' : 'เศษเนื้อสัตว์'}วันที่ {new Date(data.createdAt).getDate()} {month[new Date(data.createdAt).getMonth()]} {new Date(data.createdAt).getFullYear() + 543}
                    </button>
                </h2>
                <div id={`panelsStayOpen-collapseOne-noti${index}`} class="accordion-collapse collapse show">
                    <div class="accordion-body acd-body-noti">

                        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul class="timeline">
                                <li class="timeline-item period">
                                    <div class="timeline-info"></div>
                                    <div class="timeline-marker"></div>
                                </li>
                                <li class="timeline-item">
                                    <div class={`timeline-info-${data.status == 0 ? 'grey' : data.status == 1 ? 'red' : 'green'}`}>
                                        <a href={`/orderdetail/${data.id}`}>{data.name}</a>
                                        <span>ขอรับขยะอาหารเรียบร้อย</span>
                                        {data.status == 1 &&
                                            <button type="button" class="btn btn-noti-cancel-work" data-bs-toggle="modal" data-bs-target="popup-noti-cancel-work" onClick={() => document.getElementById('popup-noti-cancel-work').style.display = 'block'}>
                                                ยกเลิก
                                            </button>
                                        }
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class={`timeline-info-${data.status < 1 ? 'grey' : data.status == 2 ? 'red' : 'green'}`}>
                                        <span>อีก {Math.floor((new Date(data.start_date) - new Date()) / 1000 / 60 / 60) > 0 ? Math.floor((new Date(data.start_date) - new Date()) / 1000 / 60 / 60) : '< 1'} ชม. ถึงเวลานัดรับขยะอาหาร({new Date(data.start_date).getDate()} {month[new Date(data.start_date).getMonth()]} {new Date(data.start_date).getFullYear() + 543} เวลา {new Date(data.start_date).getHours()}.{minuteForm(new Date(data.start_date).getMinutes())} - {new Date(data.start_date).getDate() != new Date(data.end_date).getDate() && `${new Date(data.end_date).getDate()} ${month[new Date(data.end_date).getMonth()]} ${new Date(data.end_date).getFullYear() + 543}`} {new Date(data.end_date).getHours()}.{minuteForm(new Date(data.end_date).getMinutes())})</span>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class={`timeline-info-${data.status < 3 ? 'grey' : data.status == 3 ? 'red' : 'green'}`}>
                                        <a href={data.status == 3 && `/orderdetail/${data.id}`}>กรุณากดยืนยันการเข้ารับขยะอาหาร</a>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class={`timeline-info-${data.status < 4 ? 'grey' : data.status == 4 ? 'red' : 'green'}`}>
                                        <span>รับขยะอาหารสำเร็จแล้ว</span>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal" id="popup-noti-cancel-work" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-target='popup-noti-cancel-work'>
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close" data-bs-target='popup-noti-cancel-work' onClick={() => document.getElementById('popup-noti-cancel-work').style.display = 'none'}>
                                <img src="../images/work-create/ic-close.svg" alt="" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="texthead-confirm-create text-center">
                                ยกเลิกการเข้ารับขยะอาหาร
                            </p>
                            <div class="box-select-confirm d-flex justify-content-evenly  align-items-center">
                                <div class="col-btn-select-confirm">
                                    <button type="button" class="btn btn-select-cancel" data-bs-dismiss="modal" data-bs-target='popup-noti-cancel-work' onClick={() => document.getElementById('popup-noti-cancel-work').style.display = 'none'}>ยกเลิก</button>
                                </div>
                                <div class="col-btn-select-confirm">
                                    <button type="button" class="btn btn-select-confirm" onClick={() => cancle(data.id)}>ยืนยัน</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ))
    return (
        <section class="sec-noti">
            <div class="container">
                <p class="texthead-work">
                    การเเจ้งเตือน
                </p>
                {renderNoti}
            </div>
        </section>
    )
}

export default ReceiveNoti