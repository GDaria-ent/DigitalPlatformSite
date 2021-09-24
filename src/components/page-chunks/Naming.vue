
<template>
    <div class='max-w-4xl mx-auto'>
        <h2 class='naming-text text-center text-primary-text flex justify-center items-center font-bold '>
            <svg class='self-center mr-3.5 s:hidden' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8685 0.569176L0 5L4.8685 9.43082L9.737 5L4.8685 0.569176Z" fill="#FE5F5F"/>
            </svg>
            {{text}}
            <svg class='self-center ml-3.5 s:hidden' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8685 0.569176L0 5L4.8685 9.43082L9.737 5L4.8685 0.569176Z" fill="#FE5F5F"/>
            </svg>
        </h2>

    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Text'
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .naming-text{
            font-size: 40px;
    } 
    @media screen and (max-width:391px){
        .naming-text{
            font-size: 35px;
        }   
    }
    
</style>