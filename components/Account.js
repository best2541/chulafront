import React, { useEffect } from 'react'
import pencilIcon from '../images/account/pencil.svg'
import CreatePopup from './CreatePopup'

const Account = ({ edit, setEdit, datas, setDatas, cancle, saveClick, sendEmail }) => {

    const editChange = () => {
        if (edit) {
            setEdit(false)
        }
        else {
            cancle()
            setEdit(true)
        }
    }
    const logoutClick = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('role')
        window.location.href = '/'
    }
    useEffect(() => {
        const ele = document.getElementById('name')
        ele.focus()
    }, [edit])
    return (
        <section className="sec-account">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-7">
                        <p className="texthead-work">
                            ข้อมูลส่วนตัว
                        </p>
                    </div>
                    <div className="col-5">
                        <div className="box-edit-account text-end pointer" onClick={editChange}>
                            {/* <a href="edit-account.php" className="text-edit-account"> */}
                            <span>
                                <img src={pencilIcon} alt="" />
                            </span>
                            {edit ? 'แก้ไข' : 'ยกเลิก'}
                            {/* </a> */}
                        </div>
                    </div>
                </div>
                <div className="wraper-textform w-100 d-flex flex-column align-items-center">

                    <div className="row d-flex justify-content-center">

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"><img src="./images/login/Message-icon.png" alt="" /></span>
                                <input type="text" name='email' className="form-control border-start-0 color-gray" placeholder="อีเมล" disabled={true} value={datas?.email} onChange={setDatas} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"><img src="./images/login/account-icon.png" alt="" /></span>
                                <input type="text" id="name" name='name' className="form-control border-start-0" placeholder="ชื่อหน่วยงาน" disabled={edit} value={datas?.name} onChange={setDatas} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"><img src="./images/login/tel-icon.png" alt="" /></span>
                                <input type="number" name='phone' className="form-control border-start-0" placeholder="เบอร์โทรศัพท์" disabled={edit} value={datas?.phone} onChange={setDatas} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"><img src="./images/login/location-icon.png" alt="" /></span>
                                <input type="text" name='address' className="form-control border-start-0" placeholder="ที่อยู่" disabled={edit} value={datas?.address} onChange={setDatas} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="box-btn-signout">
                                <button className="btn bg-green text-white rounded-pill" style={{ 'width': '100%' }} disabled={edit} onClick={saveClick}>บันทึก</button>
                            </div>

                        </div>
                        <div className="col-12">
                            <hr className="hr-account" />
                        </div>

                        <div className="col-12">
                            <p className="texthead-work">
                                แจ้งปัญหาต่างๆ
                            </p>
                            <div className="boxform-control-report">
                                <textarea className="form-control" id="FormReport" rows="4"></textarea>
                                <button className="btn-send" onClick={sendEmail}>
                                    ส่ง
                                </button>
                            </div>
                        </div>

                        <div className="col-12">
                            <hr className="hr-account" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="box-btn-signout">
                                <a className="btn bg-danger text-white rounded-pill" style={{ 'width': '100%' }} onClick={logoutClick}>ออกจากระบบ</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <CreatePopup />
        </section>
    )
}

export default Account