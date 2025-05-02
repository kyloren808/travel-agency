import React from 'react'
import {Outlet} from 'react-router';

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            Sidebar
            <aside className='w-full max-w-[270px] hidden lg:block'>Desktop Sidebar</aside>
            <aside className='children'>
                <Outlet />
            </aside>
        </div>
    )
}
export default AdminLayout
