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
    clear():void
}

class EventBus implements eventBusType {
    protected bus: eventHandlerMap
    private strict: boolean
    private eventList: Array<eventType>

    constructor(eventList?: Array<eventType>) {
        this.strict = eventList && !!eventList.length
        this.strict && (this.eventList = eventList)
        this.bus = new Map()
    }

    // validate
    // check event name when strict mode
    validate(event: eventType): void { 
        if (!this.strict) { return } 

        if (!this.eventList.includes(event)) {
            throw new Error('EventBus: Event type not supported under strict mode')
        }
    }

    on<T = any>(event: eventType, handler: handlerType<T>): void {
        this.validate(event)
        const handlers = this.bus.get(event)

        if (handlers) { 
            handlers.push(handler) 
        } else {
            this.bus.set(event, [handler])
        }
    }

    // once<T = any>(event: eventType, handler: handlerType<T>): void {
    //     console.log(this, event, handler)
    // }

    off<T = any>(event: eventType, handler: handlerType<T>): void {
        this.validate(event)
        const handlers = this.bus.get(event)

        if (handlers.length && handlers.indexOf(handler) !== -1) { 
            handlers.splice(handlers.indexOf(handler), 1)
        }
    }

    emit<T = any>(event: eventType, ev?: T): void {
        this.validate(event)
        const handlers = this.bus.get(event) || []

        handlers.slice().forEach(handler => handler(ev))
    }

    clear(): void { this.bus.clear() }
}

export default EventBus