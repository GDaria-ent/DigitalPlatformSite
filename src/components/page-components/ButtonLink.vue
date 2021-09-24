<template>
    <component 
        :is="type" 
        :href="href"
        @click='onClick'
        class='bg-transparent rounded-standard text-button-text'>
        <slot name='icon'></slot>
        {{text}}
        <slot name='arrow'></slot>
    </component> 
</template>

<script>
export default {
    
    props: {
        text: {
            type: String,
            default: ''
        }, 
        type: {
            type: String,
            default: 'button'
        },
        href: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>