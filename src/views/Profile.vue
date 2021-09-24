<template>
  <div class="about">
    <div class=" h-full ">
 
      <div class="about-container border-b-2 block xs-1:flex mx-auto">

        <div class="w-full xs-1:w-2/5 p-4 xs-1:p-6 xs-1:p-8 bg-white shadow-md pt-12">
          <div class="flex justify-between">
            <button class='-mt-2 text-md font-bold text-button-text bg-none rounded-full px-5 py-2 border border-red-300'>
              <router-link class="text-xl font-semibold block text-highlight-red" to='/'>На главную</router-link>
            </button>
            <button :disabled='savingInProcess' class="flex items-center -mt-2 text-md font-bold text-button-text bg-dark-blue hover:bg-blue-700 disabled:opacity-50 rounded-full px-5 py-2" @click='saveData'>
              <Spinner v-if='savingInProcess'/>
              <span>Сохранить</span>
            </button>
          </div>
          <div class="w-full p-8 mx-2 flex justify-center">
            <img id="showImage" class="max-w-xs w-32 items-center border border-gray-200" src="@/assets/avatar.jpg" alt="">                          
            </div>
        </div>
        
        <div class="w-full xs-1:w-3/5 p-8 bg-white xs-1:ml-4 shadow-md">
          <div class="fields-container rounded  shadow p-6 mx-auto">
            <div class="pb-6">
              <label for="name" class="font-semibold text-highlight-red block pb-1">Имя</label>
              <div class="flex">
                <input id="name" class="border border-gray-200 px-4 py-2 w-full" type="text" placeholder="Введите имя" v-model='listOfFields.name'/>
              </div>
            </div>
            <div class="pb-6">
              <label for="name" class="font-semibold text-highlight-red block pb-1">Фамилия</label>
              <div class="flex">
                <input id="surname" class="border border-gray-200 px-4 py-2 w-full" type="text" placeholder="Введите фамилию" v-model='listOfFields.surname'/>
              </div>
            </div>
            <div class="pb-6">
              <label for="name" class="font-semibold text-highlight-red block pb-1">Отчество</label>
              <div class="flex">
                <input id="middle-name" class="border border-gray-200 px-4 py-2 w-full" type="text" placeholder="Введите отчество" v-model='listOfFields.middleName' />
              </div>
            </div>
            <div class="pb-6">
              <label for="name" class="font-semibold text-highlight-red block pb-1">Профессия</label>
              <div class="flex">
                <input id="job" class="border border-gray-200 px-4 py-2 w-full" type="text" placeholder="Ваша профессия" v-model='listOfFields.job' />
              </div>
            </div>
            <div class="pb-4">
              <label for="about" class="font-semibold text-highlight-red block pb-1">Email</label>
              <input  id="email" class="border border-gray-200 px-4 py-2 w-full" type="email" v-model='listOfFields.email' />
            </div>
            <div class="pb-6">
              <label for="name" class="font-semibold text-highlight-red block pb-1">Телефон</label>
              <div class="flex">
                <input  id="phone" class="border border-gray-200 px-4 py-2 w-full" type="number" placeholder="+8(111)111-11-11" v-model='listOfFields.phone' />
              </div>
            </div>
          </div>
        </div>

      </div>
 
    </div>
  </div>
</template>

<script>
  import Spinner from '@/components/page-components/Spinner.vue';
export default {
  components: { 
    Spinner 
  },
  data: function() {
    return{
      savingInProcess: false,
      listOfFields:{
        name: '',
        surname: '',
        middleName: '',
        phone: '',
        job: '',
        email: ''
      }
      
      
    }
  },
  methods: {
    getData() {
      for(let i in this.listOfFields){
        if(localStorage.getItem(i) != 'null'){
          this.listOfFields[i] = localStorage.getItem(i);
        }
      }
    },
    saveData() {
      this.savingInProcess = true;
      setTimeout(() => {
        this.saveDataInLocalStorage();
        this.savingInProcess = false;
      }, 2000);
    },
    saveDataInLocalStorage() {
      for(let i in this.listOfFields) {
        if(this.listOfFields[i] != '' && this.listOfFields[i] != null) {
          localStorage.setItem(i, this.listOfFields[i]);
        }
      }
    }
        
  },
  mounted() {
    this.getData();
  }

}

</script>

<style lang='scss' scoped>
  .fields-container {
    max-width: 800px;
    width: 100%;
  }
  .about-container{
    max-width: 940px;
    width: 100%;
  }
  .changes-saved{
    border-color: #3865A7;
  }
</style>
