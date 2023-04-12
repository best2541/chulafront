import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Summaries({ datas }) {
  return (
    <>
      <section id="show-data-index" class="">
        <div class="container">
          <div class="box-text-headline">
            <p class="text-headline">
              สถิติการเก็บขยะ
            </p>
          </div>
          <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div class="box-data-index px-4 w-100">
              <div class="inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                <div class="inbox-data-lefe d-flex align-items-center">
                  <p class="headtext-inbox-data">เลี้ยงสัตว์ </p>
                </div>
                <div class="inbox-data-lefe">
                  <div class="row d-flex align-items-center">
                    <div class="col">
                      <p class="text-inbox-data">น้ำหนัก</p>
                    </div>
                    <div class="col">
                      <div class="box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[0].weight}</p>
                      </div>
                    </div>
                    <div class="col">
                      <p class="text-inbox-data">กิโลกรัม</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                <div class="inbox-data-lefe d-flex align-items-center">
                  <p class="headtext-inbox-data">บริจาค </p>
                </div>
                <div class="inbox-data-lefe">
                  <div class="row d-flex align-items-center">
                    <div class="col">
                      <p class="text-inbox-data">น้ำหนัก</p>
                    </div>
                    <div class="col">
                      <div class="box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[1].weight}</p>
                      </div>
                    </div>
                    <div class="col">
                      <p class="text-inbox-data">กิโลกรัม</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inbox-data-index py-2 px-3 my-4 d-flex justify-content-between ">
                <div class="inbox-data-lefe d-flex align-items-center">
                  <p class="headtext-inbox-data">ทำปุ๋ยหมัก </p>
                </div>
                <div class="inbox-data-lefe">
                  <div class="row d-flex align-items-center">
                    <div class="col">
                      <p class="text-inbox-data">น้ำหนัก</p>
                    </div>
                    <div class="col">
                      <div class="box-weight-data">
                        <p class="text-inbox-data-green text-center">{datas && datas[2].weight}</p>
                      </div>
                    </div>
                    <div class="col">
                      <p class="text-inbox-data">กิโลกรัม</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div class="box-data-index px-4 w-100">
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="col-12">
                  <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                    <p class="headtext-inbox-data">เลี้ยงสัตว์</p>
                  </div>
                </div>
                <hr />
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col">
                        <p class="text-inbox-data">น้ำหนัก</p>
                      </div>
                      <div class="col">
                        <div class="box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[0].weight}</p>
                        </div>
                      </div>
                      <div class="col text-end">
                        <p class="text-inbox-data">กิโลกรัม</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="col-12">
                  <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                    <p class="headtext-inbox-data">บริจาค</p>
                  </div>
                </div>
                <hr />
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col">
                        <p class="text-inbox-data">น้ำหนัก</p>
                      </div>
                      <div class="col">
                        <div class="box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[1].weight}</p>
                        </div>
                      </div>
                      <div class="col text-end">
                        <p class="text-inbox-data">กิโลกรัม</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inbox-data-index py-2 px-3 my-4 row">
                <div class="col-12">
                  <div class="inbox-data-lefe d-flex text-center justify-content-center align-items-center mb-2">
                    <p class="headtext-inbox-data">ทำปุ๋ยหมัก</p>
                  </div>
                </div>
                <hr />
                <div class="warp-inbox-data-lefe">
                  <div class="inbox-data-lefe">
                    <div class="row d-flex align-items-center">
                      <div class="col">
                        <p class="text-inbox-data">น้ำหนัก</p>
                      </div>
                      <div class="col">
                        <div class="box-weight-data">
                          <p class="text-inbox-data-green text-center">{datas && datas[2].weight}</p>
                        </div>
                      </div>
                      <div class="col text-end">
                        <p class="text-inbox-data">กิโลกรัม</p>
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

export default Summaries