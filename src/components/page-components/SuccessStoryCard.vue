
<template>
    <div class='wrapper flex flex-row justify-start md-1:flex-col'>
        <div :class='`bg-${getTabBgPlug}`'  class='thumbs relative bg-no-repeat bg-center xl-1:bg-none md-1:mb-20'>
            <slot></slot>
            <img  :src='`${getImg}`' class="img absolute top-1/2 left-1/2 transform" :class='`-translate-x-${getTranslateX} -translate-y-${getTranslateY}`' alt=''>
            <slot></slot>
        </div>
        <div class='article-wrapper self-center'>
            <h3 class='text-2xl font-bold mb-5'>{{articleName}}</h3>
            <div class='flex'>
                <div class='svg-container flex mr-4 md:hidden' >
                    <svg class='item' width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.608081 25.3278L7.6946 32.4189L14.7811 25.3278L7.69461 18.2366L0.608081 25.3278Z" fill="#FE5F5F"/>
                        <path d="M9.50127 16.4631L16.5879 23.5542L23.6745 16.4631L16.5879 9.37206L9.50127 16.4631Z" fill="#FE5F5F"/>
                        <path d="M0.576172 7.51047L7.66267 14.6017L14.7492 7.51047L7.66267 0.419285L0.576172 7.51047Z" fill="#FE5F5F"/>
                    </svg>
                    <svg class='item' width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.608081 25.3278L7.6946 32.4189L14.7811 25.3278L7.69461 18.2366L0.608081 25.3278Z" fill="#FE5F5F"/>
                        <path d="M9.50127 16.4631L16.5879 23.5542L23.6745 16.4631L16.5879 9.37206L9.50127 16.4631Z" fill="#FE5F5F"/>
                        <path d="M0.576172 7.51047L7.66267 14.6017L14.7492 7.51047L7.66267 0.419285L0.576172 7.51047Z" fill="#FE5F5F"/>
                    </svg>
                </div>
                <p class='text-highlight-red font-bold text-base leading-19'>{{articleDescription}}</p>
            </div>
            <p class='text-base font-normal leading-18 mt-4'>{{article}}</p>
            <ButtonLink text='Читать историю' class='bg-dark-blue mt-7 flex pl-8 pr-5 py-3 md-1:w-full md-1:justify-center'>
                <template v-slot:arrow>
                    <svg class='self-center mt-1 ml-3' width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.01 3.65891H0V5.81888H12.01V9.05884L16 4.73889L12.01 0.418945V3.65891Z" fill="white"/>
                    </svg>
                </template>
            </ButtonLink>
        </div>

    </div>
</template>

<script>
    import ButtonLink from '@/components/page-components/ButtonLink.vue';
    export default {
        components: {
            ButtonLink
        },
        props: {
            articleName: {
                type: String,
                default: ' '
            },
            articleDescription: {
                type: String,
                default: ' '
            },
            article: {
                type: String,
                default: ' '
            },
            rotate: {
                type: String,
                default: '0'
            },
            image: {
                type: String,
                default: 'CookPic'
            },
            translateX: {
                type: String,
                default: ''
            },
            translateY: {
                type: String,
                default: ''
            }
        },
        computed: {
        getTabBgPlug() {
            return (`successBg${this.rotate}`);
        },
        getImg() {
            return require(`@/assets/successStoryImgs/${this.image}.png`);
        },
        getTranslateX() {
            return `${this.translateX}`;
        },
        getTranslateY() {
            return `${this.translateY}`;
        }
    }
}
</script>

<style lang="scss" scoped>
    .thumbs {
        max-width: 350px;
        width: 100%;
        padding-top: 35%;
        
    }
    .wrapper{
        max-width: 1000px;
        width: 100%;
    }
    .article-wrapper{
        max-width: 567px;
        width: 100%;
    }
    
</style>