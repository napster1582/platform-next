import { Props } from 'payload/components/fields/Text';
import { Label, useFieldType } from 'payload/components/forms';
import React from 'react';
import styled from 'styled-components';

const defaultColors = [
    {
        name: 'yellow',
        label: 'Amarillo',
        color: '#e5c890',
    },
    {
        name: 'blue',
        label: 'Azul',
        color: '#8caaee',
    },
    {
        name: 'green',
        label: 'Verde',
        color: '#a6d189',
    },
    {
        name: 'red',
        label: 'Rojo',
        color: '#e78284',
    },
    {
        name: 'purple',
        label: 'Púrpura',
        color: '#ca9ee6',
    },
];

interface ColorButtonProps {
    bgColor: string;
    isSelected: boolean;
}

const ColorList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 2rem;
    padding: 0;
    margin: 0;
`;

const ColorButton = styled.button<ColorButtonProps>`
    background-color: ${(props) => props.bgColor};
    border: 2px solid #fff;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    cursor: pointer;
    box-shadow: ${(props) => (props.isSelected ? `0 0 2px 2px` : 'none')};
`;

const ColorLabel = styled.label`
    display: block;
    text-align: center;
`;

export const Field: React.FC<Props> = (props) => {
    const { path, label, required } = props;

    const { value = '', setValue } = useFieldType({ path: path ?? '' });

    return (
        <div>
            <Label
                htmlFor={path}
                label={label}
                required={required}
            />
            <ColorList>
                {defaultColors.map(({ color, name, label }, i) => (
                    <li key={i}>
                        <ColorButton
                            type="button"
                            key={name}
                            isSelected={name === value}
                            bgColor={color}
                            aria-label={label}
                            onClick={() => setValue(name)}
                        />

                        <ColorLabel>{label}</ColorLabel>
                    </li>
                ))}
            </ColorList>
        </div>
    );
};
