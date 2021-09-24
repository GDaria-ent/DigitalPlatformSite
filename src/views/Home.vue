<template>
  <div class='template-root relative' id='app'>
    <div class='page-block bg-header-image bg-cover  bg-no-repeat w-full'>
      <PageHeader class='py-9'>
        <ContentPart>
          <nav class='navigation flex justify-between md:justify-end'>
            <ul class='flex flex-row items-center md:hidden'>
              <li>
                <ButtonLink @click='togglePopup' type='button' text='Личный кабинет' class='text-base py-1.5 px-7 bg-bright-red active:bg-red-600' />
              </li>
              <li class='ml-3'>
                <ButtonLink type='button' text='Каталог услуг' class='text-base py-1.5 px-3.5 bg-transparent text-primary-text font-bold' />
              </li>
            </ul>
            <ButtonLink type='button' text='Онлайн помощник' class='text-base px-3.5 bg-transparent text-highlight-red font-bold flex flex-row items-center md:hidden md:hidden'>
              <template v-slot:icon>
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" class='mr-3.5'>
                  <circle cx="19.1546" cy="19.1546" r="19.1546" fill="#FE5F5F"/>
                  <path d="M17.2125 26.1522L18.9712 29.4321H18.9957L20.7788 26.1522L18.9957 24.5769L17.2125 26.1522Z" fill="white"/>
                  <path d="M18.9957 10.5808C18.6048 10.752 13.6707 13.0419 13.6707 16.7015C13.6707 19.826 16.5774 24.577 16.5774 24.577L18.9957 22.4583L21.4139 24.577C21.4139 24.577 24.3207 19.8474 24.3207 16.7015C24.2963 13.0419 19.3621 10.752 18.9957 10.5808ZM20.5834 21.0244L18.9957 19.6334L17.4079 21.0244C17.3347 20.8318 16.2599 18.3065 16.2599 16.6587C16.2599 14.433 18.8003 13.1917 18.9957 13.1061C19.1911 13.1703 21.7315 14.433 21.7315 16.6587C21.7315 18.3065 20.6567 20.8318 20.5834 21.0244Z" fill="white"/>
                  <path d="M24.3092 8.99995L22.4956 10.5889L24.3092 12.1778L26.1228 10.5889L24.3092 8.99995Z" fill="white"/>
                  <path d="M20.2657 16.6144C20.2657 17.2186 19.7039 17.715 19.02 17.715C18.336 17.715 17.7742 17.2186 17.7742 16.6144C17.7742 16.0102 18.336 15.5139 19.02 15.5139C19.7039 15.5139 20.2657 16.0102 20.2657 16.6144Z" fill="white"/>
                </svg>
              </template>
            </ButtonLink>
            <ButtonLink class='hidden md:flex md:flex-row ' type='button'  @click='toggleMenu'>
              <template v-slot:icon>
                <svg  width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.375 8.4375H23.625C24.5565 8.4375 25.3125 7.6815 25.3125 6.75C25.3125 5.8185 24.5565 
                    5.0625 23.625 5.0625H3.375C2.4435 5.0625 1.6875 5.8185 1.6875 6.75C1.6875 7.6815 2.4435 8.4375 
                    3.375 8.4375ZM23.625 11.8125H3.375C2.4435 11.8125 1.6875 12.5685 1.6875 13.5C1.6875 14.4315 2.4435 
                    15.1875 3.375 15.1875H23.625C24.5565 15.1875 25.3125 14.4315 25.3125 13.5C25.3125 12.5685 24.5565 
                    11.8125 23.625 11.8125ZM23.625 18.5625H3.375C2.4435 18.5625 1.6875 19.3185 1.6875 20.25C1.6875 
                    21.1815 2.4435 21.9375 3.375 21.9375H23.625C24.5565 21.9375 25.3125 21.1815 25.3125 20.25C25.3125 19.3185 24.5565 18.5625 23.625 18.5625Z"  
                  fill="#FE5F5F"/>
                </svg>
              </template>
            </ButtonLink>
          </nav>
          <Hero class='pt-16 md:pt-2' />
        </ContentPart>
      </PageHeader>
    </div>
    <div class='question-block bg-rectangle bg-cover bg-center bg-no-repeat w-full '>
      <QuestionField class=' mx-auto' />
    </div>
    <Naming text='Преимущества' class='mt-20 mt-44 mb-24 md:mt-10 md:mb-8'/>
    <div class='flex justify-evenly px-3 max-w-6xl mx-auto md:flex-col md:place-items-center'>
      <AdvantageCard 
        numbers='482' 
        description='Организаций поддержки по Российской Федерации' 
        rotate='0'
        img='0'></AdvantageCard>
      <AdvantageCard 
        numbers='5240' 
        description='Оказано услуг государственной поддержки' 
        rotate='180' 
        img='180'
        ></AdvantageCard>
      <AdvantageCard 
        numbers='1360' 
        description='Зарегестрировано участников проекта' 
        rotate='90' 
        img='90'></AdvantageCard>
    </div>
    <Naming text='Истории успеха' class='mb-10' />
    <ContentPart class='mb-12 md-1:mb-20'>
      <SuccessStory 
        article-name='Пекарня “Русские традиции”' 
        article-description='Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».'
        article='Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта.'
        rotate='0'
        image='CookPic'
        translate-x='32'
        translate-y='28'>
        <svg class='absolute top-12 right-40 xl-1:hidden' width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.0867 28.564L38.2743 20.2927L29.4598 11.26L21.2722 19.5312L30.0867 28.564Z" fill="#3865A7"/>
          <path d="M19.2758 17.3041L27.4634 9.03281L18.6489 5.15187e-05L10.4613 8.27132L19.2758 17.3041Z" fill="#3865A7"/>
          <path d="M8.88541 27.9371L17.073 19.6659L8.25848 10.6332L0.0708886 18.9044L8.88541 27.9371Z" fill="#3865A7"/>
        </svg>
        <svg class='absolute bottom-24 right-8 xl-1:hidden' width="50" height="65" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5094 51.5098L22.6503 40.37L33.6865 37.3466L30.8274 26.2067L41.8637 23.1833L36.5744 3.21817L27.7454 5.6369L30.6452 16.7063L19.6089 19.7297L22.468 30.8696L22.5377 30.9098L22.468 30.8696L11.4318 33.893L14.2909 45.0328L3.25459 48.0562L5.57442 56.9118L25.5094 51.5098Z" fill="white"/>
        </svg>
      </SuccessStory>
    </ContentPart>
    <ContentPart class='mb-12'>
      <SuccessStory 
        article-name='Автомастерская' 
        article-description='Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.'
        article='Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг.'
        rotate='90'
        image='MechanicGuyPic'
        class='flex-row-reverse'
        translate-x='32'
        translate-y='32'>
        <svg class='absolute bottom-8 left-10 transform rotate-220 xl-1:hidden' width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.0867 28.564L38.2743 20.2927L29.4598 11.26L21.2722 19.5312L30.0867 28.564Z" fill="#F1F2F2"/>
          <path d="M19.2758 17.3041L27.4634 9.03281L18.6489 5.15187e-05L10.4613 8.27132L19.2758 17.3041Z" fill="#F1F2F2"/>
          <path d="M8.88541 27.9371L17.073 19.6659L8.25848 10.6332L0.0708886 18.9044L8.88541 27.9371Z" fill="#F1F2F2"/>
        </svg>
        <svg class='absolute right-24 top-6 transform rotate-80 xl-1:hidden' width="50" height="65" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5094 51.5098L22.6503 40.37L33.6865 37.3466L30.8274 26.2067L41.8637 23.1833L36.5744 3.21817L27.7454 5.6369L30.6452 16.7063L19.6089 19.7297L22.468 30.8696L22.5377 30.9098L22.468 30.8696L11.4318 33.893L14.2909 45.0328L3.25459 48.0562L5.57442 56.9118L25.5094 51.5098Z" fill="#3865A7"/>
        </svg>
      </SuccessStory>
    </ContentPart>
    <ContentPart class='mb-40'>
      <SuccessStory 
        article-name='Салон красоты “Эмират”' 
        article-description='Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.'
        rotate='45'
        image='ButySalonGirl'
        translate-x='36'
        translate-y='28'>
        <svg class='absolute top-16 left-6 transform -rotate-50 xl-1:hidden' width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.0867 28.564L38.2743 20.2927L29.4598 11.26L21.2722 19.5312L30.0867 28.564Z" fill="#3865A7"/>
          <path d="M19.2758 17.3041L27.4634 9.03281L18.6489 5.15187e-05L10.4613 8.27132L19.2758 17.3041Z" fill="#3865A7"/>
          <path d="M8.88541 27.9371L17.073 19.6659L8.25848 10.6332L0.0708886 18.9044L8.88541 27.9371Z" fill="#3865A7"/>
        </svg>
        <svg class='huyomb absolute bottom-24 right-8 transform rotate-165 xl-1:hidden' width="50" height="65" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5094 51.5098L22.6503 40.37L33.6865 37.3466L30.8274 26.2067L41.8637 23.1833L36.5744 3.21817L27.7454 5.6369L30.6452 16.7063L19.6089 19.7297L22.468 30.8696L22.5377 30.9098L22.468 30.8696L11.4318 33.893L14.2909 45.0328L3.25459 48.0562L5.57442 56.9118L25.5094 51.5098Z" fill="white"/>
        </svg>
      </SuccessStory>
    </ContentPart>
    <div class='footer-block bg-rotated-rectangle bg-cover bg-center bg-no-repeat w-full'>
      <div class='flex flex-col justify-center items-center mx-auto w-64' >
        <h4 class='pre-footer-heading mt-9 font-bold'>Есть вопросы?</h4>
        <p class='pre-footer-text text-center text-base font-normal mb-8'>Задайте интересующие вас вопросы онлайн помощнику</p>
        <ButtonLink text='Онлайн помощник' class='text-base  bg-bright-red flex pl-14 pr-10 pt-2 pb-2'>
          <template v-slot:icon>
            <svg class='mr-1.5' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.77332 19.2907L5.53203 22.9797H5.55646L7.3396 19.2907L5.55646 17.519L3.77332 19.2907Z" fill="white"/>
              <path d="M5.55646 1.77832C5.16563 1.97087 0.231445 4.54623 0.231445 8.66198C0.231445 12.176 3.13822 17.5193 3.13822 17.5193L5.55646 15.1365L7.9747 17.5193C7.9747 17.5193 10.8815 12.2001 10.8815 8.66198C10.857 4.54623 5.92286 1.97087 5.55646 1.77832ZM7.14419 13.5239L5.55646 11.9594L3.96872 13.5239C3.89544 13.3073 2.82067 10.4671 2.82067 8.61385C2.82067 6.1107 5.36104 4.71471 5.55646 4.61843C5.75187 4.69064 8.29224 6.1107 8.29224 8.61385C8.29224 10.4671 7.21747 13.3073 7.14419 13.5239Z" fill="white"/>
              <path d="M10.87 -2.41359e-08L9.0564 1.78699L10.87 3.57397L12.6836 1.78699L10.87 -2.41359e-08Z" fill="white"/>
              <path d="M6.82654 8.56335C6.82654 9.24299 6.26471 9.80127 5.58075 9.80127C4.89679 9.80127 4.33496 9.24299 4.33496 8.56335C4.33496 7.88371 4.89679 7.32544 5.58075 7.32544C6.26471 7.32544 6.82654 7.88371 6.82654 8.56335Z" fill="white"/>
            </svg>
          </template>
        </ButtonLink>
      </div>
    </div>
    <PageFooter/>
    <div class='fixed top-0 w-full' v-if='isPopupVisible'>
      <LoginPopupForm  @close-modal-window='togglePopup'/>
    </div>
    <div class='fixed top-0 w-full' v-if='isMenuVisible'>
      <PopupMenu
        @close-menu-window='toggleMenu'
        @show-login='togglePopup'
      />
    </div>
  </div>
</template>

<script>
  import ContentPart from '@/components/structural/ContentPart.vue';
  import PageHeader from '@/components/page-chunks/Header.vue';
  import ButtonLink from '@/components/page-components/ButtonLink.vue';
  import Hero from '@/components/page-chunks/Hero.vue';
  import QuestionField from '@/components/page-chunks/QuestionField.vue'
  import Naming from '@/components/page-chunks/Naming.vue';
  import AdvantageCard from '@/components/page-components/AdvantageCard.vue';
  import SuccessStory from '@/components/page-components/SuccessStoryCard.vue'
  import PageFooter from '@/components/page-chunks/PageFooter.vue';
  import LoginPopupForm from '@/components/page-chunks/LoginPopupForm.vue';
  import PopupMenu from '@/components/page-chunks/PopupMenu.vue'
  
  export default {
    data: function() {
      return{
        isPopupVisible: false,
        isMenuVisible: false
      }
    },
    components: {
      ContentPart,
      PageHeader,
      ButtonLink,
      Hero,
      QuestionField,
      Naming,
      AdvantageCard,
      SuccessStory,
      PageFooter,
      LoginPopupForm,
      PopupMenu  
    },
    methods: {
      togglePopup() {
        if(this.isMenuVisible){
          this.toggleMenu();
        }
        this.isPopupVisible = !this.isPopupVisible;
      },
      toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible;
      }
    }  
  }
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  font-size: 16px;
}
.page-block {
  padding-bottom: 34rem;
  background-position: 40% 0%;
}
.question-block {
  padding-bottom: 10%;
}
.footer-block {
  padding-bottom: 7%;
}

.pre-footer-heading {
  font-size: 35px;
  line-height: 51px;
}

@media screen and(max-width:500px) {
  .page-block {
    padding-bottom: 15rem;
  }
}
</style>
