import React, { useState, useEffect } from 'react'
import { apiGet, apiPost } from '@/api/api'

const EditBanner = ({ api }) => {
    const [banner1, setBanner1] = useState({ preview: "./images/work-create/ic-img-upload.svg", redirect: Boolean() })
    const [banner2, setBanner2] = useState({ preview: "./images/work-create/ic-img-upload.svg", redirect: Boolean() })
    const [banner3, setBanner3] = useState({ preview: "./images/work-create/ic-img-upload.svg", redirect: Boolean() })
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    const logoutClick = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('role')
        window.location.href = '/'
    }
    const load = () => {
        setLoading(true)
        apiGet(`${api}/index/getallbanner`)
            .then((result) => {
                if (!result.data.err) {
                    console.log(result.data.banner[0].redirect)
                    setDatas(result.data.banner)
                    setBanner1({ ...banner1, redirect: Boolean(result.data.banner[0].redirect) })
                    setBanner2({ ...banner2, redirect: Boolean(result.data.banner[1].redirect) })
                    setBanner3({ ...banner3, redirect: Boolean(result.data.banner[2].redirect) })
                }
                setLoading(false)
            })
    }
    const preview1 = (event) => {
        let form1 = new FormData()
        form1.append('name', 'demo1')
        form1.append('file', event.target.files[0])
        form1.append('id', 1)
        apiPost(`${api}/index/editbanner`, form1)
            .then(result => {
                if (!result.data.err) {
                    setBanner1({ ...banner1, img: event.target.files[0], preview: `${api}/img/${result.data}` })
                }
            })
    }
    const preview2 = (event) => {
        let form2 = new FormData()
        form2.append('name', 'demo2')
        form2.append('file', event.target.files[0])
        form2.append('id', 2)
        apiPost(`${api}/index/editbanner`, form2)
            .then(result => {
                if (!result.data.err) {
                    setBanner2({ ...banner2, img: event.target.files[0], preview: `${api}/img/${result.data}` })
                }
            })
    }
    const preview3 = (event) => {
        let form3 = new FormData()
        form3.append('name', 'demo3')
        form3.append('file', event.target.files[0])
        form3.append('id', 3)
        apiPost(`${api}/index/editbanner`, form3)
            .then(result => {
                if (!result.data.err) {
                    setBanner3({ ...banner3, img: event.target.files[0], preview: `${api}/img/${result.data}` })
                }
            })
    }
    const save = () => {
        console.log(banner1, banner2, banner3)
        try {
            if (banner1.preview != "./images/work-create/ic-img-upload.svg") {
                let form1 = new FormData()
                form1.append('name', 'banner1')
                form1.append('file', banner1.img && banner1.img)
                form1.append('redirect', banner1.redirect)
                form1.append('id', 1)
                apiPost(`${api}/index/editbanner`, form1)
                    .then(result => {
                        if (!result.data.err) {
                            console.log(result.data)
                        }
                    })
            }
            if (banner2.preview != "./images/work-create/ic-img-upload.svg") {
                let form2 = new FormData()
                form2.append('name', 'banner2')
                form2.append('file', banner2.img && banner2.img)
                form2.append('redirect', banner2.redirect)
                form2.append('id', 2)
                apiPost(`${api}/index/editbanner`, form2)
                    .then(result => {
                        if (!result.data.err) {
                            console.log(result.data)
                        }
                    })
            }
            if (banner3.preview != "./images/work-create/ic-img-upload.svg") {
                let form3 = new FormData()
                form3.append('name', 'banner3')
                form3.append('file', banner3.img && banner3.img)
                form3.append('redirect', banner3.redirect)
                form3.append('id', 3)
                apiPost(`${api}/index/editbanner`, form3)
                    .then(result => {
                        if (!result.data.err) {
                            console.log(result.data)
                        }
                    })
            }
        } catch (err) {

        } finally {
            document.getElementById('popup-confirm-receive').style.display = 'block'
        }
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
                            แก้ไขแบนเนอร์
                        </p>
                    </div>
                </div>
                <div className="wraper-textform w-100 d-flex flex-column align-items-center">

                    <div className="row d-flex justify-content-center">

                        <div className="row">
                            <div className="col-12">
                                <div className="box-upload">
                                    <div className="box-image-upload d-flex justify-content-center align-items-center">
                                        <input type="file" name="" id="img-upload1" accept="image/*" className="d-none" onChange={(event) => preview1(event)} />
                                        <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload1">
                                            <img className={banner1.preview == './images/work-create/ic-img-upload.svg' ? "icon-img-upload" : "box-image-description-example"} src={banner1.preview} alt="" />
                                            {banner1.preview == './images/work-create/ic-img-upload.svg' &&
                                                <p className="texthead-work text-center text-limit">เพิ่มรูปภาพ</p>
                                            }
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text border-end-0"><input type='checkbox' onClick={(event) => setBanner1({ ...banner1, redirect: !banner1.redirect })} defaultChecked={datas[0] ? datas[0].redirect : null} /></span>
                                <input type="text" id="name" name='name' className="form-control border-start-0" placeholder="Link vdo" value={datas[0] ? datas[0].link : ''} onChange={setDatas} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box-upload">
                                    <div className="box-image-upload d-flex justify-content-center align-items-center">
                                        <input type="file" name="" id="img-upload2" accept="image/*" className="d-none" onChange={(event) => preview2(event)} />
                                        <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload2">
                                            <img className={banner2.preview == './images/work-create/ic-img-upload.svg' ? "icon-img-upload" : "box-image-description-example"} src={banner2.preview} alt="" />
                                            {banner2.preview == './images/work-create/ic-img-upload.svg' &&
                                                <p className="texthead-work text-center text-limit">เพิ่มรูปภาพ</p>
                                            }
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text border-end-0"><input type='checkbox' onClick={(event) => setBanner2({ ...banner2, redirect: !banner2.redirect })} defaultChecked={datas[1] ? datas[1].redirect : null} /></span>
                                <input type="text" id="name" name='name' className="form-control border-start-0" placeholder="Link vdo" value={datas[1] ? datas[1].link : ''} onChange={setDatas} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box-upload">
                                    <div className="box-image-upload d-flex justify-content-center align-items-center">
                                        <input type="file" name="" id="img-upload3" accept="image/*" className="d-none" onChange={(event) => preview3(event)} />
                                        <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload3">
                                            <img className={banner3.preview == './images/work-create/ic-img-upload.svg' ? "icon-img-upload" : "box-image-description-example"} src={banner3.preview} alt="" />
                                            {banner3.preview == './images/work-create/ic-img-upload.svg' &&
                                                <p className="texthead-work text-center text-limit">เพิ่มรูปภาพ</p>
                                            }
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text border-end-0"><input type='checkbox' onClick={(event) => setBanner3({ ...banner3, redirect: !banner3.redirect })} defaultChecked={datas[2] ? datas[2].redirect : null} /></span>
                                <input type="text" id="name" name='name' className="form-control border-start-0" placeholder="Link vdo" value={datas[2] ? datas[2].link : ''} onChange={setDatas} />
                            </div>
                        </div>

                        <div className="col-12">
                            <hr className="hr-account" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="box-btn-signout">
                                <a className="btn bg-green text-white rounded-pill" style={{ 'width': '100%' }} onClick={() => save()}>บันทึกแบนเนอร์</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="popup-confirm-receive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>
                                <img src="../images/work-create/ic-close.svg" alt="" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="texthead-confirm-create text-center">
                                เรียบร้อย
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditBanner