import React from 'react';

export const TextAlignRightButton = () => <div>Align Right</div>;

export const TextAlignRightLeaf = ({ children }: any) => (
    <div style={{ textAlign: 'right' }}>{children}</div>
);
