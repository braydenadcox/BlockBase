import fs from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

const header = `interface LegoSet {
    id: string,
    name: string,
    category: string,
    tags: string[],
    price: string,
    link: string,
    image: string
}

export const LegoSets: LegoSet[] = [
`;

const url = 'https://www.lego.com/en-us/themes/architecture'
const response = await axios.get(url);
const data = response.data;
const $ = cheerio.load(data);
const scriptTags = $('script[type="application/ld+json"]');

const LegoSets = [];

scriptTags.each((i, el) => {
    const rawJson = $(el).html().trim();

    try {
        const parsed = JSON.parse(rawJson);

        if (parsed['@type'] === 'ItemList') {
            parsed.itemListElement.forEach(item => {
                const idMatch = item.url.match(/(\d{5})/);
                const id = idMatch ? idMatch[1] : null;
                

                LegoSets.push({
                    id: id,
                    name: item.name,
                    category: "Architecture",
                    tags: ['popular'],
                    price: '',
                    link: item.url,
                    image: ''
                });
            });
        }
    } catch (error) {
        // ignore scripts that aren't valid JSON
    }
});

for (const set of LegoSets) {
    try {
        const productPage = await axios.get(set.link);
        const $$ = cheerio.load(productPage.data);

        const price = $$('meta[property="product:price:amount"]').attr('content') || '';
        const image = $$('meta[property="og:image"]').attr('content') || '';

        set.price = price ? `$${price}` : '';
        set.image = image || '';
    } catch ( error ) {
        console.warn(`Failed to grab page for ${set.name}`);
    }
}

const body = LegoSets.map(set => {
    return `    {
        id: '${set.id}',
        name: '${set.name.replace(/'/g, "\\'")}',
        category: '${set.category}',
        tags: [${set.tags.map(tag => `'${tag}'`).join(', ')}],
        price: '${set.price}',
        link: '${set.link}',
        image: '${set.image}'
    }`;
}).join(',\n');

const footer = `\n];\n`;         

const finalContent = header + body + footer;

fs.writeFileSync('src/data/legosets.ts', finalContent); 
