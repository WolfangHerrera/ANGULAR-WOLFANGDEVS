export type portfolioMessages = {
    title: string;
    items: portfolioItemMessages[];
    buttonText: string;
}

type portfolioItemMessages = {
    title: string;
    imgUrl: string;
    desc: string;
    urlProject: string;
    urlGithub: string;
};
