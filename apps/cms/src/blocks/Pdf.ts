import { Block } from 'payload/types';

const PdfBlock: Block = {
    slug: 'Pdf',
    labels: {
        singular: 'Pdf',
        plural: 'Pdfs',
    },
    fields: [
        {
            name: 'group',
            label: 'Grupos',
            type: 'array',
            fields: [
                {
                    name: 'pdf',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'application/pdf' },
                    },
                },
            ],
        },
    ],
};

export default PdfBlock;
