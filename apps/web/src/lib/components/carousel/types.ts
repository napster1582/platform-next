export type JinenCarouselItem = {
    name: string;
    title: string;
    description: string;
    backgroundImageUrl: string;
    backgroundImageAlt: string;
    previews: JinenCarouselPreview[];
};

export type JinenCarouselPreview = {
    title: string;
    backgroundImageUrl: string;
    backgroundImageAlt: string;
};
