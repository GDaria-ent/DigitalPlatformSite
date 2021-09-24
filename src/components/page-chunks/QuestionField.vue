
<template>
    <div class='container mx-auto max-w-3xl px-2'>
        <p class='question-text mx-auto  font-bold text-center pt-5 mb-14 md:mb-8'>Для начала работы ответьте на вопрос,<br class='md:hidden'> есть ли у вас уже существующий бизнес?</p>
        <div class='flex justify-around md:flex-wrap'>
            <ButtonLink type='button' text='Да, у меня уже есть бизнес' class='text-lg py-3 px-12 bg-bright-red md:mb-2 md:px-16 xs:px-8' />
            <ButtonLink type='button' text='Нет, но планирую открыть' class='text-lg py-1 px-16 bg-dark-blue md:py-3 xs:px-8' />
        </div>
    </div>
</template>

<script>
import ButtonLink from '@/components/page-components/ButtonLink.vue';
export default {
    components: {
        ButtonLink
    }
}
</script>

<style lang="scss" scoped>
    .question-text{
        font-size: 30px;
    }
    @media screen and (max-width:654px){
        .question-text{
            font-size: 20px;
        }   
    }
</style>