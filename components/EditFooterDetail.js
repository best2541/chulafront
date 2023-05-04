import React, { useState, useEffect } from 'react'
import { apiGet, apiPost } from '@/api/api'

const EditFooterDetail = ({ api }) => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    const datasChange = (event) => {
        const { name, value } = event.target
        setDatas({
            ...datas,
            [name]: value
        })
    }
    const load = () => {
        setLoading(true)
        apiGet(`${api}/index/getfooter`)
            .then((result) => {
                if (!result.data.err) {
                    console.log(result.data.footer)
                    setDatas(result.data.footer)
                }
                setLoading(false)
            })
    }

    const saveClick = () => {
        apiPost(`${api}/index/editfooter`, datas)
            .then(result => {
                if (!result.data.err) {
                    window.location.reload()
                } else
                    alert('ไม่สำเร็จ')
            })
    }
    useEffect(() => {
        load()
    }, [])
    return (
        <section className="sec-account">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-7">
                        <p className="texthead-work">
                            แก้ไข Footer
                        </p>
                    </div>
                </div>
                <div className="wraper-textform w-100 d-flex flex-column align-items-center">

                    <div className="row d-flex justify-content-center">

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"></span>
                                <input type="text" name='title' className="form-control border-start-0 color-gray" placeholder="ชื่อ" onChange={datasChange} value={datas.title} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"></span>
                                <input type="text" id="name" name='address' className="form-control border-start-0" placeholder="ที่อยู่" onChange={datasChange} value={datas.address} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"> </span>
                                <input type="text" name='phone' className="form-control border-start-0" placeholder="เบอร์โทรศัพท์" onChange={datasChange} value={datas.phone} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"></span>
                                <input type="text" name='email' className="form-control border-start-0" placeholder="อีเมล" onChange={datasChange} value={datas.email} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text border-end-0 border-start-radius"></span>
                                <input type="text" name='sponsor' className="form-control border-start-0" placeholder="Sponsor" onChange={datasChange} value={datas.email} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                      
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="box-btn-signout">
                                <button className="btn bg-green text-white rounded-pill" style={{ 'width': '100%' }} onClick={saveClick}>บันทึก</button>
                            </div>

                        </div>
                        <div className="col-12">
                            <hr className="hr-account" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditFooterDetail