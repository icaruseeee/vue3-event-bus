// TODO 
// support wildcard custom event

// name | symbol of event
export type eventType = string | symbol

// an event handler should not return value
export type handlerType <T = any> = (ev?: T) => void

// array of event handler
export type handlerListType = Array<handlerType>

// use map to store handlers
export type eventHandlerMap = Map<eventType, handlerListType>

export interface eventBusType {
    on<T = any> (event: eventType, handler: handlerType<T>): void
    // TODO
    // once<T = any> (event: eventType, handler: handlerType<T>): void
    off<T = any> (event: eventType, handler: handlerType<T>): void
    emit<T = any> (event: eventType, ev?: T): void
}

class EventBus implements eventBusType {
    protected bus: eventHandlerMap
    private strict: boolean

    constructor(eventList?: Array<eventType>) {
        this.strict = eventList && !!eventList.length
        this.bus = new Map()
    }

    on<T = any>(event: eventType, handler: handlerType<T>): void {
        console.log(this, event, handler)
    }

    once<T = any>(event: eventType, handler: handlerType<T>): void {
        console.log(this, event, handler)
    }

    off<T = any>(event: eventType, handler: handlerType<T>): void {
        console.log(this, event, handler)
    }

    emit<T = any>(event: eventType, ev?: T): void {
        console.log(this, event, ev)
    }
}

export default EventBus