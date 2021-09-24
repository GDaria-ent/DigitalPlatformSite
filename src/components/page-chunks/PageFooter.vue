<template>
    <div class='w-full bg-footer-bg pt-8 pl-20 pb-8 pr-16 xl:pl-0 xl:pr-0'>
        <nav class='flex justify-around flex-wrap xl:flex-col'>
            <ul class='nav-links flex flex-wrap xl:flex-col xl:mb-3 xl:place-content-center'>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base text-gray-700 mr-8 xl:m-0' type='a' href='/' text='Услуга и поддержка'/>
                </li>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base text-gray-700 mr-8 xl:m-0' type='a' href='/' text='Сервисы для бизнеса'/>
                </li>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base text-gray-700 mr-8 xl:m-0' type='a' href='/' text='Общая информация'/>
                </li>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base last text-gray-700 xl:m-0' type='a' href='/' text='Защита бизнеса'/>
                </li>
            </ul>
            <ul class='flex nav-buttons flex-wrap xl:flex-col xl:place-content-center'>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base text-gray-700 mr-8 xl:m-0' type='a' href="mailto:service@in-line.ru" text='service@in-line.ru' />
                </li>
                <li class='xl:text-center'>
                    <ButtonLink class='text-base' type='a' href="tel:8-800-200-74-30" text='8-800-200-74-30'/>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import ButtonLink from '@/components/page-components/ButtonLink.vue';
export default {
    components: {ButtonLink}
}
</script>

<style lang="scss" scoped>
    .last:last-child {
        margin: 0;
    }
</style>