import React from 'react';

export const TextAlignLeftButton = () => <div>Align Left</div>;

export const TextAlignLeftLeaf = ({ children }: any) => (
    <div style={{ textAlign: 'left' }}>{children}</div>
);
