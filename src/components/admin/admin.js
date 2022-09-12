import './admin.css'
import Dashboard from './dashboard/dashboard'
import AdminMenu from './admin-menu'
import { useParams } from 'react-router-dom'
import Songs from './songs/songs'
import Artists from './artists/artists'
import { toast, ToastContainer } from 'react-toastify'

const Admin = () => {
    const page = useParams().page || "songs"

    return(
        <div className="admin">
            <AdminMenu activePage={page}/>
            {
                page === 'dashboard' ? <Dashboard/>
                : page === 'songs' ? <Songs toast={toast}/>
                : page === 'artists' ? <Artists/>
                : null
            }
            <ToastContainer/>
        </div>
    )
}

export default Admin