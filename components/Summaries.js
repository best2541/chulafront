import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Summaries({ datas }) {
  return (
    <>
      <section id="show-data-index" class="">
        <div class="container">
          <div class="box-text-headline">
            <p class="text-headline">
              การนำไปใช้ประโยชน์
            </p>
          </div>
          <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div >
              <div className='row'>
                <div class="col-4 inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                  <div className='row'>
                    <div className='col-6' style={{ minHeight: '160px' }}>
                      <img class="text-inbox-data" src='./images/index/livestock.png' style={{ width: '100%' }} />
                    </div>
                    <div className='col-6'>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">อาหารสัตว์</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[0].weight}</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">กิโลกรัม</p>
                      </div>
                    </div>
                    <div className='text-center updateDate' style={{ bottom: '0px' }}>
                      {datas && new Date(datas[0].updatedAt).toLocaleString('th')}
                    </div>
                  </div>
                </div>

                <div class="col-4 inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                  <div className='row'>
                    <div className='col-6' style={{ minHeight: '160px' }}>
                      <img class="text-inbox-data" src='./images/index/food-donation.png' style={{ width: '100%' }} />
                    </div>
                    <div className='col-6'>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">บริจาค</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[1].weight}</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">กิโลกรัม</p>
                      </div>
                    </div>
                    <div className='text-center updateDate' style={{ bottom: '0px' }}>
                      {datas && new Date(datas[1].updatedAt).toLocaleString('th')}
                    </div>
                  </div>
                </div>

                <div class="col-4 inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                  <div className='row'>
                    <div className='col-6' style={{ minHeight: '160px' }}>
                      <img class="text-inbox-data" src='./images/index/composting.png' style={{ width: '100%' }} />
                    </div>
                    <div className='col-6'>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">ทำปุ๋ย</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[2].weight}</p>
                      </div>
                      <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                        <p class="headtext-inbox-data">กิโลกรัม</p>
                      </div>
                    </div>
                    <div className='text-center updateDate' style={{ bottom: '0px' }}>
                      {datas && new Date(datas[2].updatedAt).toLocaleString('th')}
                    </div>
                  </div>
                </div>
              </div>{/* row */}

            </div>
          </div>
          <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div class="box-data-index px-4 w-100">
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col-6">
                        <img class="text-inbox-data" src='./images/index/livestock.png' style={{ width: '100%' }} />
                      </div>
                      <div class="col-6">
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">อาหารสัตว์</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[0].weight}</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">กิโลกรัม</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-end updateDate'>
                อัพเดตล่าสุด {datas && new Date(datas[0].updatedAt).toLocaleString('th')}
              </div>
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col-6">
                        <img class="text-inbox-data" src='./images/index/food-donation.png' style={{ width: '100%' }} />
                      </div>
                      <div class="col-6">
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">บริจาค</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[1].weight}</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">กิโลกรัม</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-end updateDate'>
                อัพเดตล่าสุด  {datas && new Date(datas[1].updatedAt).toLocaleString('th')}
              </div>
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col-6">
                        <img class="text-inbox-data" src='./images/index/composting.png' style={{ width: '100%' }} />
                      </div>
                      <div class="col-6">
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">ทำปุ๋ย</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2 box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[2].weight}</p>
                        </div>
                        <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                          <p class="headtext-inbox-data">กิโลกรัม</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-end updateDate'>
                อัพเดตล่าสุด  {datas && new Date(datas[2].updatedAt).toLocaleString('th')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Summaries