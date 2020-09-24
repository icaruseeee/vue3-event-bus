import { provide, inject } from 'vue'
import EventBus, { eventType, eventBusType } from './EventBus'

const createEventBus = (eventList:Array<eventType>): eventBusType => new EventBus(eventList)
const eventBusSymbol = Symbol()

export function provideEventBus(eventList: Array<eventType>):void {
    const eventBus = createEventBus(eventList)
    provide(eventBusSymbol, eventBus)
}

export function useEventBus():eventBusType {
    const eventBus = inject<eventBusType>(eventBusSymbol)
    if (!eventBus) { throw new Error('No event bus provided') }

    return eventBus
}