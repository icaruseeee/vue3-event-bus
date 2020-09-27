declare type eventType = string | symbol;
declare type handlerType<T = any> = (ev?: T) => void;
declare type handlerListType = Array<handlerType>;
declare type eventHandlerMap = Map<eventType, handlerListType>;
interface eventBusType {
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

declare function provideEventBus(eventList?: Array<eventType>): void;
declare function useEventBus(): eventBusType;

export default EventBus;
export { provideEventBus, useEventBus };
