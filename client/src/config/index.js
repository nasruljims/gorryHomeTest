import axios from 'axios'
import Swal from 'sweetalert2'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: error.response.data.message
    })
    return Promise.reject(error)
})

export default instance