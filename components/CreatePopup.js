import React from 'react'

const CreatePopup = () => {
    return (
        <div className="modal fade show" id="popup-confirm-create" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                            <img src="../RecycleChula/images/work-create/ic-close.svg" alt="" />
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="texthead-confirm-create text-center">
                            ยืนยันการสร้างงาน
                        </p>
                        <div class="box-select-confirm d-flex justify-content-evenly  align-items-center">
                            <div class="col-btn-select-confirm">
                                <button type="button" class="btn btn-select-cancel" data-bs-dismiss="modal">ยกเลิก</button>
                            </div>
                            <div class="col-btn-select-confirm">
                                <button type="button" class="btn btn-select-confirm">ยืนยัน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePopup