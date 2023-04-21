import React from 'react'
import Link from 'next/link'

const EditFooter = () => {

    return (
        <section className="sec-account">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-4">
                        <Link href={'/editbanner'}>
                            <p className="texthead-work text-center">
                                แบนเนอร์
                            </p>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link href={'/editnews'}>
                            <p className="texthead-work text-center">
                                ข่าว
                            </p>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link href={'/editfooter'}>
                            <p className="texthead-work text-center">
                                Footer
                            </p>
                        </Link>
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

export default EditFooter