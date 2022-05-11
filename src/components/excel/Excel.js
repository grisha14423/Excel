/* eslint-disable */
import {$} from '../../core/dom'
export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        // const $root = document.createElement('div')
        // $root.classList.add('excel')

        this.components = this.components.map(Component => {
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const $el = $.create('div', Component.className)
            const component = new Component($el)
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
}
