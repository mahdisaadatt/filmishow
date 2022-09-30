import React from 'react';
import Box from './Box';

const Sidebar = () => {
  return (
    <div className='w-1/3 mt-4 mr-4 h-full hidden flex-col justify-center items-center gap-y-4 lg:flex'>
      <Box title='فیلم های 2022' desc='دانلود فیلم‌های جدید' toWhere='/release/2022/' icon='movies' />
      <Box title='سریال‌های به‌روز شده' desc='دانلود قسمت جدید سریال‌ها' toWhere='/series/' icon='series' />
    </div>
  );
};

export default Sidebar;
