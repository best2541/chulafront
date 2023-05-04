import React from 'react'
import month from './month'
import minuteForm from './minuteForm'

const Noti = ({ datas, setDatas, api }) => {
    const toggleClick = (event) => {
        event.target.classList.toggle('collapsed')
        const id = event?.target?.getAttribute('data-bs-target')
        const ele = document.getElementById(id)
        ele?.classList.toggle('show')
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
                                    <div class={`timeline-info-${data.status < 3 ? 'grey' : data.status == 4 ? 'red' : 'green'}`}>
                                        <a href={data.status == 3 ? `/orderdetail/${data.id}` : data.status == 4 ? `/orderdetail/${data.id}` : null}>{data.status > 3 ? 'กรุณากดยืนยันการเข้ารับขยะอาหาร' : 'รอผู้รับยืนยันการรับ'}</a>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                    </div>
                                </li>
                                {data.status > 5 &&
                                    <>
                                        <li class="timeline-item">
                                            <div class={`timeline-info-${data.status < 6 ? 'grey' : data.status == 6 ? 'red' : 'green'}`}>
                                                <span>ล้มเหลว</span>
                                            </div>
                                            <div class="timeline-marker"></div>
                                            <div class="timeline-content">
                                            </div>
                                        </li>
                                        <li class="timeline-item">
                                            <div class={`timeline-info-${data.status < 7 ? 'grey' : data.status == 7 ? 'red' : 'green'}`}>
                                                <span>เทศบาลกำลังมารับขยะ</span>
                                            </div>
                                            <div class="timeline-marker"></div>
                                            <div class="timeline-content">
                                            </div>
                                        </li>
                                    </>
                                }
                                <li class="timeline-item">
                                    <div class={`timeline-info-${data.status < 5 ? 'grey' : data.status == 5 ? 'red' : 'grey'}`}>
                                        <span>ขยะอาหารถูกรับสำเร็จแล้ว</span>
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
        </>
    ))
    return (
        <section class="sec-noti">
            <div class="container">

                <p class="texthead-work">
                    การเเจ้งเตือน
                </p>

                <div class="accordion" id="accordionNoti">
                    {renderNoti}
                </div>
            </div>
        </section>
    )
}

export default Noti