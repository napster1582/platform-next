import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    padding: 10px;
    display: flex;
    gap: 1rem;
    flex-flow: column;
`;

const AppName = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    color: ${process.env.PAYLOAD_PUBLIC_CMS_COLOR ?? 'inherit'};
`;

const Headline = styled.span`
    display: block;
    max-width: 350px;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 900;
    letter-spacing: 0.025em;
    text-align: center;
`;

export const Logo = (): React.JSX.Element => (
    <LogoContainer>
        <IconContainer>
            <ShipIcon />
        </IconContainer>

        <Squiggle />

        <ContentContainer>
            <AppName>{process.env.PAYLOAD_PUBLIC_CMS_NAME ?? 'JINEN CMS'}</AppName>

            {process.env.PAYLOAD_PUBLIC_CMS_HEADLINE && (
                <Headline>{process.env.PAYLOAD_PUBLIC_CMS_HEADLINE}</Headline>
            )}
        </ContentContainer>

        <Squiggle />
    </LogoContainer>
);

export const Squiggle = (): React.JSX.Element => (
    <svg
        _ngcontent-mlw-c18=""
        aria-hidden="true"
        width="100%"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <pattern
            _ngcontent-mlw-c18=""
            id="a"
            width="91"
            height="8"
            patternUnits="userSpaceOnUse"
        >
            <g
                _ngcontent-mlw-c18=""
                clipPath="url(#clip0_2426_11367)"
            >
                <path
                    _ngcontent-mlw-c18=""
                    d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                    stroke={process.env.PAYLOAD_PUBLIC_CMS_COLOR ?? 'var(--theme-elevation-200)'}
                    strokeLinecap="square"
                ></path>
            </g>
        </pattern>
        <rect
            _ngcontent-mlw-c18=""
            width="100%"
            height="100%"
            fill="url(#a)"
        ></rect>
    </svg>
);

export const ShipIcon = (): React.JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
    >
        <g
            fill="none"
            fillRule="evenodd"
        >
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
            <path
                fill={process.env.PAYLOAD_PUBLIC_CMS_COLOR ?? 'currentColor'}
                d="M14.211 17.776a4 4 0 0 1 3.364-.099l.214.1l2.658 1.328a1 1 0 0 1-.787 1.835l-.107-.046l-2.659-1.329a2 2 0 0 0-1.617-.076l-.172.076l-1.316.659a4 4 0 0 1-3.365.098l-.213-.098l-1.317-.659a2 2 0 0 0-1.617-.076l-.172.076l-2.658 1.33a1 1 0 0 1-.996-1.731l.102-.059l2.658-1.329a4 4 0 0 1 3.364-.099l.214.1l1.316.658a2 2 0 0 0 1.618.076l.171-.076l1.317-.659ZM13 2a1 1 0 0 1 1 1v1.32l3.329.554a2 2 0 0 1 1.67 1.973v3.432l2.06.686a1.25 1.25 0 0 1 .753 1.679l-2.169 5.06l-1.854-.928a4 4 0 0 0-3.578 0l-1.317.659a2 2 0 0 1-1.789 0l-1.316-.659a4 4 0 0 0-3.578 0l-1.27.636l-2.658-4.651a1.25 1.25 0 0 1 .69-1.806L5 10.279V6.847a2 2 0 0 1 1.67-1.973L10 4.32V3a1 1 0 0 1 1-1h2Zm-1 4.014l-5 .833v2.766l4.367-1.456a2 2 0 0 1 1.265 0L17 9.613V6.847l-5-.833Z"
            />
        </g>
    </svg>
);
