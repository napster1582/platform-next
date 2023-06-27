import React from 'react';

export const TextAlignCenterButton = () => <div>Align Center</div>;

export const TextAlignCenterLeaf = ({ children }: any) => (
    <div style={{ textAlign: 'center' }}>{children}</div>
);
