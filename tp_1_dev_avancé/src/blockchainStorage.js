import {readFile, writeFile} from 'node:fs/promises';
import {getDate, monSecret} from "./divers.js";
import {NotFoundError} from "./errors.js";
import {createHash} from 'node:crypto'
import uuidv4 from 'uuidv4';


/* Chemin de stockage des blocks */
const path = './data/blockchain.json'

/**
 * Mes définitions
 * @typedef { id: string, nom: string, don: number, date: string,hash: string} Block
 * @property {string} id
 * @property {string} nom
 * @property {number} don
 * @property {string} date
 * @property {string} string
 *
 */

/**
 * Renvoie un tableau json de tous les blocks
 * @return {Promise<any>}
 */
export async function findBlocks() {
   return readFile(path, 'utf-8')
       .then(result => {
           return result;
    })
    .catch(error => {
        console.log(error);
    })
}

/**
 * Trouve un block à partir de son id
 * @param partialBlock
 * @return {Promise<Block|null>}
 */
export async function findBlock(partialBlock) {
    const blocks = JSON.parse(await findBlocks()) || [];
    return blocks.find(block => block.id === partialBlock.id) || null;
}

/**
 * Trouve le dernier block de la chaine
 * @return {Promise<Block|null>}
 */
export async function findLastBlock() {
    const blocks = await findBlocks();
    const parsedBlocks = blocks ? JSON.parse(blocks) : [];
    return parsedBlocks.length > 0 ? parsedBlocks[parsedBlocks.length - 1] : null;
}

export function generateSHA256(input) {
    const hash = createHash('sha256').update(input).digest('hex');
    return hash;
}

/**
 * Creation d'un block depuis le contenu json
 * @param contenu
 * @return {Promise<Block[]>}
 */
export async function createBlock(contenu) {
    const lastBlock = await findLastBlock();
    const lastBlockHash = lastBlock ? generateSHA256(JSON.stringify(lastBlock)) : '';

    const block = {
        id: uuidv4(),
        nom: contenu.nom,
        don: contenu.don,
        date: getDate(),
        hash: lastBlockHash,
        chaine: 'END'
    };

    const existingContent = await readFile(path, { encoding: 'utf8' });
    const blocks = existingContent ? JSON.parse(existingContent) : [];

    blocks.push(block);

    await writeFile(path, JSON.stringify(blocks, null, 2));

    return block;
}

