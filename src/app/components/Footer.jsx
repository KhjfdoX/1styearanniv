'use client';

import { Footer } from 'flowbite-react';
import Link from 'next/link';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto text-center'>
        <div className='flex flex-col items-center'>
          <Link
            href='/'
            className='self-center text-lg sm:text-xl font-semibold dark:text-white mb-4'
          >
            <span className='px-2 py-1 from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Enerelt&apos;s very own Blog!
            </span>
          </Link>
        </div>
        <Footer.Divider />
      </div>
    </Footer>
  );
}