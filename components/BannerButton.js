import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function BannerButton() {
  const role = typeof window !== 'undefined' ? window?.localStorage.getItem('role') : null
  return (
    <section id="button-work" class="boxbutton-workindex my-5">
      <div class="container">
        {role &&
          <Link href='/neworder'>
            <div class="btn button-workindex w-100">
              {role == 1 ? 'สร้างงาน' : role == 2 ? 'รับขยะ' : 'ตรวจสอบ'}
            </div>
          </Link>
        }
      </div>
    </section>
  )
}

export default BannerButton