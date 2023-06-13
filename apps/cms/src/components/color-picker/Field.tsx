import { Props } from 'payload/components/fields/Text';
import { Label, useFieldType } from 'payload/components/forms';
import React from 'react';
import styled from 'styled-components';

const defaultColors = [
    {
        name: 'red',
        label: 'Rojo',
        color: '#ef4444',
    },
    {
        name: 'orange',
        label: 'Naranja',
        color: '#f97316',
    },
    {
        name: 'amber',
        label: 'Ámbar',
        color: '#f59e0b',
    },
    {
        name: 'yellow',
        label: 'Amarillo',
        color: '#eab308',
    },
    {
        name: 'lime',
        label: 'Lima',
        color: '#84cc16',
    },
    {
        name: 'green',
        label: 'Verde',
        color: '#22c55e',
    },
    {
        name: 'emerald',
        label: 'Esmeralda',
        color: '#10b981',
    },
    {
        name: 'teal',
        label: 'Verde azulado',
        color: '#14b8a6',
    },
    {
        name: 'cyan',
        label: 'Cian',
        color: '#06b6d4',
    },
    {
        name: 'sky',
        label: 'Cielo',
        color: '#0ea5e9',
    },
    {
        name: 'blue',
        label: 'Azul',
        color: '#3b82f6',
    },
    {
        name: 'indigo',
        label: 'Índigo',
        color: '#6366f1',
    },
    {
        name: 'violet',
        label: 'Violeta',
        color: '#8b5cf6',
    },
    {
        name: 'purple',
        label: 'Púrpura',
        color: '#a855f7',
    },
    {
        name: 'fuchsia',
        label: 'Fucsia',
        color: '#d946ef',
    },
    {
        name: 'pink',
        label: 'Rosa',
        color: '#ec4899',
    },
    {
        name: 'rose',
        label: 'Rosado',
        color: '#f43f5e',
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
