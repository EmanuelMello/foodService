export class Food {
    id!: string;
    name!: string;
    price!: number;
    imageUrl!: string;
    tags: string[] = [];
    favorite!: boolean;
    stars!: number;
    origins!: string[];
    cookTime!: string;
}