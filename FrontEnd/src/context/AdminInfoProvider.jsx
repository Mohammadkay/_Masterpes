import React, { createContext, useState, useEffect } from 'react';

const AdminInfoContext = createContext();

const AdminInfoProvider = ({ children }) => {
    const [adminInfo, setAdminInfo] = useState(() => {
        const storedAdminInfo = localStorage.getItem('adminInfo');
        return storedAdminInfo ? JSON.parse(storedAdminInfo) : null;
    });

    //Custom Pagination
    const PAGE_SHOW = 10

    useEffect(() => {
        localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
    }, [adminInfo]);

    return (
        <AdminInfoContext.Provider value={{ adminInfo, setAdminInfo, PAGE_SHOW }}>
            {children}
        </AdminInfoContext.Provider>
    );
};

export { AdminInfoContext, AdminInfoProvider };
