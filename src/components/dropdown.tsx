import Link from 'next/link';

const Dropdown = () => {
    return (
        <div className='relative group'>
            <Link className='group-hover:bg-yellow-400 transition-colors duration-200' href='/categories'>CATEGORIES</Link>
            <div className='flex flex-col absolute hidden group-hover:block bg-white text-black rounded mt-2 p-2 z-50 text-sm duration-500'>
                <Link className='flex' href='/shop'>STAR WARS</Link>
                <Link className='flex' href='/shop'>CITY</Link>
                <Link className='flex' href='/shop'>CREATOR</Link>
                <Link className='flex' href='/shop'>ARCHITECTURE</Link>
                <Link className='flex' href='/shop'>HARRY POTTER</Link>
            </div>
        </div>
    );
};

export default Dropdown;