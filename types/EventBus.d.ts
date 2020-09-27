export declare type eventType = string | symbol;
export declare type handlerType<T = any> = (ev?: T) => void;
export declare type handlerListType = Array<handlerType>;
export declare type eventHandlerMap = Map<eventType, handlerListType>;
export interface eventBusType {
    on<T = any>(event: eventType, handler: handlerType<T>): void;
    off<T = any>(event: eventType, handler: handlerType<T>): void;
    emit<T = any>(event: eventType, ev?: T): void;
    clear(): void;
}
declare class EventBus implements eventBusType {
    protected bus: eventHandlerMap;
    private strict;
    private eventList;
    constructor(eventList?: Array<eventType>);
    validate(event: eventType): void;
    on<T = any>(event: eventType, handler: handlerType<T>): void;
    off<T = any>(event: eventType, handler: handlerType<T>): void;
    emit<T = any>(event: eventType, ev?: T): void;
    clear(): void;
}
export default EventBus;
