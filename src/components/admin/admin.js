import './admin.css'
import Dashboard from './dashboard/dashboard'
import AdminMenu from './admin-menu'
import { useParams } from 'react-router-dom'
import Songs from './songs/songs'
import Artists from './artists/artists'

const Admin = () => {

    const page = useParams().page

    return(
        <div className="admin">
            <AdminMenu activePage={
                page != null ? page : 'songs'
            }/>
            {
                page === 'dashboard' ? <Dashboard/>
                : page === 'songs' ? <Songs/>
                : page === 'artists' ? <Artists/>
                : page == null ? <Songs/>
                : null
            }
        </div>
    )
}

export default Admin