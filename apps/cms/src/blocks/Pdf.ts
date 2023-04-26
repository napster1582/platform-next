import { Block } from 'payload/types';

const PdfBlock: Block = {
    slug: 'Pdf',
    labels: {
        singular: 'Pdf',
        plural: 'Pdfs',
    },
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
};

export default PdfBlock;
