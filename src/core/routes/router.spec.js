import {Router} from "./Router";
import {Page} from "../Page";

class DashboardPage extends Page {
    getRot() {
        const root = document.createElement('div')
        root.innerHTML = 'dashboard'
        return root
    }
}
class Excel extends Page {}

describe('Router:', () => {
    let router
    let $root

    beforeEach(() => {
        $root = document.createElement('div')
        router = new Router($root,{
            dashboard: DashboardPage,
            excel: Excel
        })
    })
    test('should be defined', () => {
        expect(router).toBeDefined()
    })

    test('router render Dashboard page', () => {
        router.changePageHandler()
        expect($root.innerHTML).toBe('<div>dashboard</div>')
    })
})