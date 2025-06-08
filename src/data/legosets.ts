// All lego set information, data and everything else go HERE

interface LegoSet {
    id: string,
    name: string,
    category: string,
    tags: string[],
    price: string,
    link: string
}

export const LegoSets: LegoSet[] = [
    {
        id: '75192', name: 'Millenium Falcon™', category: 'Star Wars', tags: ['popular'], price: '$849.99', link: 'https://www.lego.com/en-us/product/millennium-falcon-75192'
    },

    {
        id: '21061', name: 'Notre-Dame de Paris', category: 'Architecture', tags: ['popular'], price: '$229.99', link: 'https://www.lego.com/en-us/product/notre-dame-de-paris-21061'

    },

    {
        id: '75639', name: 'The Going Merry Pirate Ship', category: 'One Piece', tags: ['upcoming'], price: '$139.99', link: 'https://www.lego.com/en-us/product/the-going-merry-pirate-ship-75639'
    },

    {
        id: '10352', name: 'The Simpsons: Krusty Burger', category: 'Icons', tags: ['new'], price: '$209.99', link: 'https://www.lego.com/en-us/product/the-simpsons-krusty-burger-10352'
    }
]