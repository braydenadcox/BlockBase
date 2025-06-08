import { LegoSets } from '@/data/legosets';

interface CatalogProps {
  tag: string;
}

const SetCatalog = ({ tag }: CatalogProps) => {
  return (
    <div className='grid grid-cols-3 gap-5 overflow-y-scroll h-full w-full'>
      {LegoSets.map((legoSet) => {
        if (legoSet.tags.includes(tag)) {
          return (
            <div key={legoSet.id} className="p-4 bg-white shadow-md rounded">
              <h2 className="font-bold text-lg">{legoSet.name}</h2>
              <p>{legoSet.price}</p>
              <a className="text-blue-500 underline" href={legoSet.link} target="_blank">
                View Product
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SetCatalog;
