import './admin.css'
import Dashboard from './dashboard/dashboard'
import AdminMenu from './admin-menu'
import { useParams } from 'react-router-dom'
import Songs from './songs/songs'
import Artists from './artists/artists'
import Playlists from './playlists/playlists'

const Admin = () => {

    const page = useParams().page

    return(
        <div className="admin">
            <AdminMenu activePage={
                page != null ? page : 'dashboard'
            }/>
            {
                page === 'dashboard' ? <Dashboard/>
                : page === 'songs' ? <Songs/>
                : page === 'artists' ? <Artists/>
                : page === 'playlists' ? <Playlists/>
                : page == null ? <Dashboard/>
                : null
            }
        </div>
    )
}

export default Admin