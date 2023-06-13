import escapeHTML from 'escape-html';
import { Text } from 'slate';

type Node = {
    [k: string]: unknown;
};

export const serializeHTML = (children: Node[]): string[] => {
    return children.map((node) => {
        if (Text.isText(node)) {
            let text = escapeHTML(node.text);

            if (node.bold) {
                text = `<strong>${text}</strong>`;
            }

            if (node.code) {
                text = `<code>${text}</code>`;
            }

            if (node.italic) {
                text = `<em>${text}</em>`;
            }

            return text;
        }

        if (!node) {
            return '';
        }

        switch (node.type) {
            case 'h1':
                return `<h1>${serializeHTML(node.children as Node[]).join('')}</h1>`;

            case 'h2':
                return `<h2>${serializeHTML(node.children as Node[]).join('')}</h2>`;

            case 'h3':
                return `<h3>${serializeHTML(node.children as Node[]).join('')}</h3>`;

            case 'h4':
                return `<h4>${serializeHTML(node.children as Node[]).join('')}</h4>`;

            case 'h5':
                return `<h5>${serializeHTML(node.children as Node[]).join('')}</h5>`;

            case 'h6':
                return `<h6>${serializeHTML(node.children as Node[]).join('')}</h6>`;

            case 'blockquote':
                return `<blockquote>${serializeHTML(node.children as Node[]).join(
                    '',
                )}</blockquote>`;

            case 'ul':
                return `<ul>${serializeHTML(node.children as Node[])
                    .map((child) => `<li>${child}</li>`)
                    .join('')}</ul>`;

            case 'ol':
                return `<ol>${serializeHTML(node.children as Node[])
                    .map((child) => `<li>${child}</li>`)
                    .join('')}</ol>`;

            case 'li':
                return `${serializeHTML(node.children as Node[]).join('')}`;

            case 'link':
                return `<a href="${escapeHTML(
                    `${node.url}`,
                )}" class="text-blue-300">${serializeHTML(node.children as Node[]).join('')}</a>`;

            default:
                return `${serializeHTML(node.children as Node[]).join('')}`;
        }
    });
};
