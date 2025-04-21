export interface CardProps {
    id: number;
    username: string,
    created_datetime: Date,
    title: string,
    content: string
}

export interface GetCardProps {
    count: number,
    next: number | null,
    previous: number | null,
    results: CardProps[]
}