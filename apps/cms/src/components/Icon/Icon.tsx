import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
	position: relative;
`;

const AppName = styled.span`
	display: block;
	padding: 10px 0;
	text-align: center;
	color: ${process.env.PAYLOAD_PUBLIC_CMS_COLOR ?? 'inherit'};
`;

const Headline = styled.span`
	display: block;
	padding-bottom: 10px;
	font-size: 1.3rem;
	line-height: 1.2;
	font-weight: 900;
	letter-spacing: 0.025em;
	text-align: center;
`;

export const Icon = (): React.JSX.Element => (
	<LogoContainer>
		<Squiggle />

		<AppName>{process.env.PAYLOAD_PUBLIC_CMS_NAME ?? 'JINEN CMS'}</AppName>

		{process.env.PAYLOAD_PUBLIC_CMS_HEADLINE && (
			<Headline>{process.env.PAYLOAD_PUBLIC_CMS_HEADLINE}</Headline>
		)}

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
