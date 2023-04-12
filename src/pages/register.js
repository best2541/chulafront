import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { apiGet, apiPost } from '@/api/api'

export default function Register(props) {
  const test = /^0\d{8,9}\s*$/g
  const passwordTest = /^\d{6}$/g
  const router = useRouter()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()
  const [input, setInput] = useState({ objective: '' })
  const [validate, setValidate] = useState({})

  const inputChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...input,
      [name]: name == 'password' || name == 'confirmpassword' ? value.trim() : value
    })
  }

  const togglePassword = (button, icon) => {
    if (button.getAttribute('type') === "password") {
      button.setAttribute("type", "text")
    } else {
      button.setAttribute("type", "password")
    }
    icon.target.classList.toggle("bi-eye")
  }

  const submitClick = (e) => {
    e.preventDefault()
    apiPost(`${props.api}/auth/register`, { ...input, ...router.query, objective: input.objective || 0 }).then(result => {
      if (!result.data.err) {
        alert('กรุณาตรวจสอบ E-mail')
        window.location.href = '/login'
      }
    }).catch(() => alert('ไม่สำเร็จ'))
  }
  useEffect(() => {
    apiPost(`${props.api}/auth/isexist`, { email: input.email, name: input.name }).then(result => {
      setValidate({
        ...validate,
        ...result.data,
      })
    })
  }, [input?.email, input?.name])
  useEffect(() => {
    setValidate({
      ...validate,
      checkPhone: test.test(input?.phone)
    })
  }, [input?.phone])
  useEffect(() => {
    setValidate({
      ...validate,
      checkPassword: passwordTest.test(input?.password)
    })
  }, [input?.password])
  return (
    <>
      <Head>
        <title>สร้างบัญชีผู้ใช้</title>
        <meta name="description" content="เพื่อการจัดการขยะที่ยั่งยืน" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robot" content="index, follow" />
        <meta name='copyright' content='Orange Technology Solution co.,ltd.' />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css"
          integrity="sha512-WIWddQW7bHfs1gwICYIoXuifLb8gCPkE7Z/gq7QHk3pKuxjNs0E68Rn5c7Ig4cWguZW5CIvRroTj2GrSxsvUZQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="css/flexslider.css" />
        <link rel="stylesheet" href="css/flexslider-rtl.css" />
        <link rel="stylesheet" href="css/flexslider-rtl-min.css" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <script src="js/jquery.flexslider.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/modernizr.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="container py-lg-5 pt-md-3 pb-md-5 pt-5 pb-5">

        <div class="box-headtext d-flex justify-content-center">
          <p>
            สร้างบัญชีผู้ใช้
          </p>
        </div>
        <form onSubmit={submitClick}>
          <div class="wraper-textform d-flex flex-column mx-auto align-items-center">

            <div class="input-group mb-3">
              <span class={`input-group-text border-start-radius`}><img src="./images/login/Message-icon.png" alt="" /></span>
              <input type="email" class={`form-control border-end-radius ${validate.isEmailExist && 'text-danger'}`} placeholder="อีเมล" name='email' onChange={inputChange} required />
            </div>

            <div class="input-group mb-3">
              <span class={`input-group-text border-start-radius`}><img src="./images/login/Lock-icon.png" alt="" /></span>
              <input type="password" id="password" class={`form-control border-start-0 ${!passwordTest.test(input.password) === true && 'text-danger'}`} placeholder="รหัสผ่าน" ref={passwordRef} name='password' value={input.password} onChange={inputChange} required />
              <span class={`input-group-text border-end-radius `}><i class="bi bi-eye-slash" id="togglePassword" onClick={(event) => togglePassword(passwordRef.current, event)}></i></span>
            </div>

            <div class="input-group mb-3">
              <span class={`input-group-text border-start-radius`}><img src="./images/login/Lock-icon.png" alt="" /></span>
              <input type="password" id="password" class={`form-control border-start-0 ${input.password !== input.confirmpassword && 'text-danger'}`} placeholder="ยืนยันรหัสผ่าน" ref={confirmpasswordRef} name='confirmpassword' value={input.confirmpassword} onChange={inputChange} required />
              <span class={`input-group-text border-end-radius`}><i class="bi bi-eye-slash" id="togglePassword" onClick={(event) => togglePassword(confirmpasswordRef.current, event)}></i></span>
            </div>

            <div class="input-group mb-3">
              <span class={`input-group-text border-start-radius`}><img src="./images/login/account-icon.png" alt="" /></span>
              <input type="text" class={`form-control border-end-radius ${validate.isNameExist && 'text-danger'}`} placeholder="ชื่อหน่วยงาน" name='name' onChange={inputChange} required />
            </div>

            <div class="input-group mb-3">
              <span className={`input-group-text border-start-radius`}><img src="./images/login/tel-icon.png" alt="" /></span>
              <input type="text" className={`form-control border-end-radius ${test.test(input.phone) ? '' : 'text-danger'}`} placeholder="เบอร์โทรศัพท์" name='phone' onChange={inputChange} required />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text border-start-radius"><img src="./images/login/location-icon.png" alt="" /></span>
              <input type="text" class="form-control border-end-radius" placeholder="ที่อยู่" name='address' onChange={inputChange} required />
            </div>

            {router.query.role == '2' && router.query.sub_role == 1 &&
              <div class="input-group mb-3">
                <span class="input-group-text border-start-radius"><div /></span>
                <select class="form-control border-end-radius" placeholder="จุดประสงค์" name='objective' onChange={inputChange} required >
                  <option value='' className='text'>จุดประสงค์...</option>
                  <option value='1'>เลี้ยงปลา</option>
                  <option value='2'>เลี้ยงหมู</option>
                  <option value='3'>เลี้ยงไก่ไข่</option>
                  <option value='4'>เลี้ยงไก่เนื้อ</option>
                  <option value='5'>ทำปุ๋ยหมัก</option>
                  <option value='6'>อื่น</option>
                </select>
              </div>
            }
            {router.query.role == '2' && router.query.sub_role == 2 &&
              <div class="input-group mb-3">
                <span class="input-group-text border-start-radius"><div /></span>
                <select class="form-control border-end-radius" placeholder="จุดประสงค์" name='objective' onChange={inputChange} required >
                  <option value='' className='text'>จุดประสงค์...</option>
                  <option value='7'>บริจาคคน</option>
                  <option value='8'>บริจาคสุนัข/แมว</option>
                  <option value='9'>อื่นๆ</option>
                </select>
              </div>
            }
            {router.query.role == '2' && router.query.sub_role == 3 &&
              <div class="input-group mb-3">
                <span class="input-group-text border-start-radius"><div /></span>
                <select class="form-control border-end-radius" placeholder="จุดประสงค์" name='objective' onChange={inputChange} required >
                  <option value='' className='text'>จุดประสงค์...</option>
                  <option value='10'>บริจาคคน</option>
                  <option value='11'>บริจาคสุนัข/แมว</option>
                  <option value='12'>ทำปุ๋ยหมัก
                  </option>
                  <option value='13'>อื่นๆ</option>
                </select>
              </div>
            }
            {validate.isEmailExist &&
              <p className='text-danger'>อีเมล ซ้ำ</p>
            }
            {!validate.checkPassword &&
              <p className='text-danger'>รหัสผ่านต้องเป็นตัวเลข6หลัก</p>
            }
            {!validate.checkPhone &&
              <p className='text-danger'>เบอร์โทรศัพท์ไม่ถูกต้อง</p>
            }
            {input.password !== input.confirmpassword &&
              <p className='text-danger'>รหัสผ่านไม่เหมือนกัน</p>
            }
            {validate.isNameExist &&
              <p className='text-danger'>ชื่อหน่วยงาน ซ้ำ</p>
            }
            <button type='submit' class="btn bg-green text-white w-100 rounded-pill" disabled={router.query.role == '2' ? input?.objective == '' || passwordTest.test(input.password) || !validate.checkPhone || validate.isEmailExist || input.password !== input.confirmpassword || validate.isNameExist : validate.isEmailExist || !validate.checkPhone || passwordTest.test(input.password) || input.password !== input.confirmpassword || validate.isNameExist}>สร้างบัญชี</button>
          </div>
        </form>

      </div >
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      api: process.env.API,
    },
  }
}