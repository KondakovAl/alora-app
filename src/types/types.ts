export interface HeadProps {
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

export interface CardsProps {  
    img: string;
    id: string;
    title: string;
    description: string; 
}

export interface CommentsProps {  
    photo: string;
    name: string;
    position: string;
    comment: string;
}

export interface ContactProps {  
    id: string;
    title: string;
    description: string;
    link: string;
    href: string;
    blockType: string,
}