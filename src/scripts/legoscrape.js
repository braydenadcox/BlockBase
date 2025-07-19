import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const TARGET_URL = 'https://www.lego.com/en-us/categories/architecture';

async function GrabSets() {
    try {
        const { data: html } = await axios.get(TARGET_URL);
        const $ = cheerio.load(html);

        let jsonLD = null;

        $('script[type="application/ld+json"]').each((_, el) => {
            const rawJson = $(el).html().trim();
            if (rawJson.includes('"@type":"ItemList"')) {
                jsonLD = JSON.parse(rawJson);
            }
        });

        if (!jsonLD || !jsonLD.itemListElement) {
            console.error('❌ No ItemList data found in JSON-LD.');
            return;
        }

        const sets = jsonLD.itemListElement.map(item => {
            const idMatch = item.url.match(/(\d{5})/);
            const id = idMatch ? idMatch[1] : '00000';

            return {
                id,
                name: item.name,
                category: 'Architecture',
                tags: ['popular'],
                price: '', 
                link: item.url,
                image: '', 
            };
        });

        const output = `export const legoSets = ${JSON.stringify(sets, null, 4)};\n`;
        fs.writeFileSync('legosets.ts', output);
        console.log(`Saved ${sets.length} sets to legosets.ts`);
    } catch (error) {
        console.error('Error scraping LEGO JSON-LD:', error.message);
    }
}

GrabSets();
