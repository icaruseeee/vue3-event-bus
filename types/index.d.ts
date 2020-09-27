import EventBus, { eventType, eventBusType } from './EventBus'

export declare function provideEventBus(eventList?: Array<eventType>): void;
export declare function useEventBus(): eventBusType;
export default EventBus