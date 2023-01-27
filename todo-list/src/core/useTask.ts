export default class useTask {
    id: number
    text: string 
    state: string
    disabled: boolean

    constructor(text: string, state: string, id: number, disabled: boolean) {
        this.text = text
        this.state = state
        this.id = id
        this.disabled = disabled
    }

    get Id() {
        return this.id
    }

    get Text() {
        return this.text
    }

    get State() {
        return this.state
    }

    get Disabled() {
        return this.disabled
    }
}