//interface is a way to define the structure of an object
//it describes the properties, their types, and the methods that an object should have
//interfaces are purely for declaration purposes and do not transpile to any code in JavaScript.

interface StackElement<TData> {
    type: string;
    color: string;
    data: TData
}

// we need to export in order to import somewhere else
export { StackElement }