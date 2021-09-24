
<template>
    <div class='w-64 flex flex-col justify-center mb-60 md:mb-4'>
        <div :class='`bg-${getTabBgPlug}`' class='pt-40 relative bg-no-repeat bg-center' >
            <img class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" :src='`${getImg}`' />
        </div>
        <div class=' text-center text-50px text-highlight-blue'>{{numbers}}</div>
        <div class='text-primary-text text-center text-xl font-bold'>{{description}}</div>
    </div>
</template>

<script>
export default {
    props: {
        numbers: {
            type: String,
            default: '482'
        },
        description: {
            type: String,
            default: 'Организаций поддержки по Российской Федерации'
        },
        rotate: {
            type: String,
            default: '0'
        },
        img: {
            type: String,
            default: '0'
        }
    },
    computed: {
        getTabBgPlug() {
            return (`bg${this.rotate}`);
        },
        getImg() {
            return require(`@/assets/img${this.img}.svg`);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>