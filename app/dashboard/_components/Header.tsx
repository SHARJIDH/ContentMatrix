import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-background text-foreground dark:bg-primary dark:text-primary-foreground flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
        <Search className='text-primary' />
        <input type="text" placeholder='Search...' className='outline-none bg-transparent text-black dark:text-white' />
      </div>
      <div>
        <h2 className='bg-primary p-1 rounded-full text-sm text-primary-foreground dark:bg-secondary dark:text-secondary-foreground'>
          🚀 Join Membership for only $4.99/month
        </h2>
      </div>
    </div>
  );
}

export default Header;
