import Link from 'next/link';

const Dropdown = () => {
    return (
        <div className='relative group'>
            <Link className='group-hover:bg-yellow-400 transition-colors duration-200' href='/categories'>CATEGORIES</Link>
            <div className='absolute hidden group-hover:block bg-white text-black rounded mt-2 p-2 z-50 text-md'>
                <p className=''>CITY</p>
                <p className=''>STAR WARS</p>
                <p className=''>CREATOR</p>
                <p className=''>NINJAGO</p>
                <p className=''>ARCHITECTURE</p>
                <p className=''>HARRY POTTER</p>
            </div>
        </div>
    );
};

export default Dropdown;