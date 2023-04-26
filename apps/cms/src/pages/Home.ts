import { Block } from 'payload/types';
import HeroBlock from '../blocks/Hero';
import MenuBlock from '../blocks/Menu';

const HomePage: Block = {
    slug: 'Home',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    description: 'Lorem ipsum dolor',
                    fields: [
                        {
                            name: 'hero',
                            type: 'blocks',
                            required: true,
                            blocks: [HeroBlock],
                        },
                    ],
                },
                {
                    label: 'Menu',
                    description: 'Dolor sit ammet',
                    fields: [
                        {
                            name: 'menu',
                            type: 'blocks',
                            required: true,
                            blocks: [MenuBlock],
                        },
                    ],
                },
            ],
        },
    ],
};

export default HomePage;
