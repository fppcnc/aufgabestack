//import interface StackElement that defines its structure
import { StackElement } from "./StackElement";

class Stack<TData> {
    // class Stack is made of an array of single StackElements
    private stackElements: StackElement<TData>[];

    public constructor() {
        this.stackElements = [];
    }

    //using push we add a new element on top to the stack.
    //pushClothes include the creation of a new object which will be push()ed to the top
    public pushClothes(type: string, color: string, data: TData): void{

        const stackElement: StackElement<TData> = {
            type,
            color,
            data,
        };

        this.stackElements.push(stackElement)

    }

    //pop() takes the element on top of a stack.
    //having it implemented in this Class, it will take the element on top of stackElements´ array
    public popClothing (): StackElement<TData> {
        return this.stackElements.pop();
    }
}

export { Stack }