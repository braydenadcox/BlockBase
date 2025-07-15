// All lego set information, data and everything else go HERE

interface LegoSet {
    id: string,
    name: string,
    category: string,
    tags: string[],
    price: string,
    link: string,
    image: string
}

export const LegoSets: LegoSet[] = [
    {
        id: '75192', name: 'Millenium Falcon™', category: 'Star Wars', tags: ['popular'], price: '$849.99', link: 'https://www.lego.com/en-us/product/millennium-falcon-75192', image: 'https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=70&width=1200&height=1200&dpr=1.5'
    },

    {
        id: '21061', name: 'Notre-Dame de Paris', category: 'Architecture', tags: ['popular'], price: '$229.99', link: 'https://www.lego.com/en-us/product/notre-dame-de-paris-21061', image: 'https://www.lego.com/cdn/cs/set/assets/blte79009bca2be0858/21061.png?format=webply&fit=bounds&quality=70&width=1200&height=1200&dpr=1.5'

    },

    {
        id: '75639', name: 'The Going Merry Pirate Ship', category: 'One Piece', tags: ['upcoming'], price: '$139.99', link: 'https://www.lego.com/en-us/product/the-going-merry-pirate-ship-75639', image: 'https://www.lego.com/cdn/cs/set/assets/blt25bc5b8dc7d77c0b/75639_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=1200&height=1200&dpr=1.5'
    },

    {
        id: '10352', name: 'The Simpsons: Krusty Burger', category: 'Icons', tags: ['new'], price: '$209.99', link: 'https://www.lego.com/en-us/product/the-simpsons-krusty-burger-10352', image: 'https://www.lego.com/cdn/cs/set/assets/bltf7f3d8d3096f1cb2/10352_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5'
    }


]