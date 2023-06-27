import { StackElement } from "./StackElement";

class Stack<TData> {
    private stackElements: StackElement<TData>[];

    public constructor() {
        this.stackElements = [];
    }

    // ask why we need to declare the type here if its already defined in the interface
    public pushClothes(type: string, color: string, data: TData): void{

        const stackElement: StackElement<TData> = {
            type,
            color,
            data,
        };

        this.stackElements.push(stackElement)

    }

    public popClothing (): StackElement<TData> {
        return this.stackElements.pop();
    }
}

export { Stack }