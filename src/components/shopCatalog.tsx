import { LegoSets } from '@/data/legosets';

interface CatalogProps {
  group: string;
}

const ShopCatalog = ({ group }: CatalogProps) => {
  return (
    <div className='h-full overflow-y-scroll w-full'>
      <div className='grid grid-cols-3 gap-5 p-4 text-black'>
        {LegoSets.map((legoSet) => {
          if (legoSet.category.includes(group)) {
            return (
              <div key={legoSet.id} className="p-4 bg-white shadow-md rounded hover:bg-gray-200 duration-400">
                <a className="text-black font-bold text-lg" href={legoSet.link} target="_blank">
                  {legoSet.name}
                </a>
                <p>{legoSet.price}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShopCatalog;
