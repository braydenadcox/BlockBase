'use client'

interface FilterProps {
  onSelect?: (group: string) => void;
}

const Filter = ({ onSelect }: FilterProps) => {
  return (
    <div className='w-1/4 bg-gray-500 p-4'>
      <p className='font-bold mb-2 text-4xl text-white'>Filter by Category:</p>
      <button onClick={() => onSelect?.('Minecraft')} className='block mb-2 text-black'>
        Minecraft
      </button>
      <button onClick={() => onSelect?.('Star Wars')} className='block mb-2 text-black'>
        Star Wars
      </button>
      <button onClick={() => onSelect?.('Technic')} className='block mb-2 text-black'>
        Technic
      </button>
    </div>
  );
};

export default Filter;