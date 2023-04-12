import axios from "axios"

export function isLogedin() {
    !window.localStorage.getItem('token') ? window.location.href = '/' : ''
}
export async function apiGet(url) {
    return await axios.get(url, {
        headers: {
            authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
    })
}
export async function apiPost(url, datas) {
    return await axios.post(url, datas, {
        headers: {
            authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
    })
}
export function apiPut() {
    console.log('put')
}
export function apiDelete() {
    console.log('delete')
}
