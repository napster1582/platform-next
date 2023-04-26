import { Block, GlobalConfig } from 'payload/types';

const FacebookBlock: Block = {
    slug: 'Facebook',
    fields: [
        {
            name: 'href',
            type: 'text',
            required: true,
        },
    ],
};

const InstagramBlock: Block = {
    slug: 'Instagram',
    fields: [
        {
            name: 'href',
            type: 'text',
            required: true,
        },
    ],
};

const TwitterBlock: Block = {
    slug: 'Twitter',
    fields: [
        {
            name: 'href',
            type: 'text',
            required: true,
        },
    ],
};

const LinkedInBlock: Block = {
    slug: 'LinkedIn',
    fields: [
        {
            name: 'href',
            type: 'text',
            required: true,
        },
    ],
};

const SocialMedia: GlobalConfig = {
    slug: 'social-media',
    label: 'Redes sociales',
    fields: [
        {
            name: 'socialMedia',
            type: 'blocks',
            blocks: [FacebookBlock, InstagramBlock, TwitterBlock, LinkedInBlock],
        },
    ],
};

export default SocialMedia;
