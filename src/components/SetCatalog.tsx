import { LegoSets } from '@/data/legosets';

interface CatalogProps {
  tag: string;
}

const SetCatalog = ({ tag }: CatalogProps) => {
  return (
    <div className='h-full overflow-y-scroll w-full'>
      <div className='grid grid-cols-3 gap-5 p-4 text-black'>
        {LegoSets.map((legoSet) => {
          if (legoSet.tags.includes(tag)) {
            return (
              <div key={legoSet.id} className="p-4 bg-white shadow-md rounded">
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

export default SetCatalog;
