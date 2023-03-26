import { SvelteComponent } from 'svelte'

declare class Progress extends SvelteComponent {
    constructor(options: any)

    $$prop_def: {

        progress: number | string

        size?: number | string
        color?: string
        bgcolor?: string
        borderColor?: string
        borderWeight?: numner | string
        borderRadius?: number | string
        textColor?: string
        labelText?: string
        customContent?: boolean | string
    }
}

export default Progress