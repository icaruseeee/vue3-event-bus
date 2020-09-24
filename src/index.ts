import { provide, inject, onBeforeUnmount, version } from 'vue'
import EventBus, { eventType, eventBusType } from './EventBus'

const createEventBus = (eventList:Array<eventType>): eventBusType => new EventBus(eventList)
const eventBusSymbol = Symbol()

export function provideEventBus(eventList: Array<eventType>):void {
    const majorVer = Number(version.split('.')[0])
    if (majorVer < 3) { throw new Error('EventBus: Only support Vue3+') }

    const eventBus = createEventBus(eventList)
    provide(eventBusSymbol, eventBus)
    onBeforeUnmount(() => {
        eventBus.clear()
    })
}

export function useEventBus():eventBusType {
    const eventBus = inject<eventBusType>(eventBusSymbol)
    if (!eventBus) { throw new Error('No event bus provided') }
    
    return eventBus
}