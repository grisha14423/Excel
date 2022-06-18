/* eslint-disable */
import {$} from '../../core/dom'
import {Emitter} from "../../core/Emitter";

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
        this.emitter = new Emitter()
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        // const $root = document.createElement('div')
        // $root.classList.add('excel')
        const componentOptions = {
            emitter: this.emitter
        }

        this.components = this.components.map(Component => {
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const $el = $.create('div', Component.className)
            const component = new Component($el, componentOptions)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        // afterbegin, afterend, beforebegin, beforeend
        // this.$el.insertAdjacentHTML('afterbegin', '<h1>test</h1>')

        this.$el.append(this.getRoot())

        this.components.forEach(component => component.init())
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}
