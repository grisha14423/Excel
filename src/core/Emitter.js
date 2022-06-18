/* eslint-disable */

export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch Уведомление о слушателе
    emit(event, ...args) {
        if(!Array.isArray(this.listeners[event])) return false

        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // on, listen Подписаться на уведомление, добавить нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)

        return () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// const emitter = new Emitter()
// emitter.subscribe('myEvent', data => console.log('subscriber:', data))
// const unsub = emitter.subscribe('myEvent', data => console.log('subscriber:', data))
// emitter.emit('myEvent', 'pulsar1')
// unsub()
// emitter.emit('myEvent', 'pulsar3')