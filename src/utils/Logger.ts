export function LogMethod(text: string){
    return function (target: any, propertyName: string, propertyDesciptor: PropertyDescriptor) {
        const originalMethod = propertyDesciptor.value;
        propertyDesciptor.value = function (...args: any[]) {            
            console.log("INFO: ", text, JSON.stringify(args));
            return originalMethod.apply(this, args);
        };
    }
}
