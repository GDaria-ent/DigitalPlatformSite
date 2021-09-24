
<template>
    <div class='w-full h-full backdrop-filter backdrop-blur-md backdrop-contrast-100 w-screen h-screen overflow-y-auto'>
        <div class='popup-container mx-auto'>
            <div class="bg-white sm:bg-gray-200 flex flex-col justify-center items-center mt-12" v-if='isLogin'>
                <div class="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full s:w-full sm:w-8/12 s:w-7/12 py-8 relative ">
                    <button class='absolute top-4 right-4' @click='closeModal' type="button">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8421 1.43912C11.8848 
                                1.48067 11.9188 1.5304 11.942 
                                1.58537C11.9652 1.64033 11.9772 1.69941 11.9772 1.7591C11.9772 1.81878 
                                11.9652 1.87786 11.942 1.93283C11.9188 1.98779 11.8848 2.03752 11.8421 2.07907L8.28583 5.71307C8.24308 
                                5.75462 8.2091 5.80435 8.18589 5.85932C8.16269 5.91428 8.15073 5.97336 8.15073 6.03305C8.15073 6.09273 8.16269 6.15181 
                                8.18589 6.20678C8.2091 6.26174 8.24308 6.31147 8.28583 6.35302L11.8649 9.94131C11.9076 9.98286 11.9416 10.0326 11.9648 10.0876C11.988 
                                10.1425 12 10.2016 12 10.2613C12 10.321 11.988 10.3801 11.9648 10.435C11.9416 10.49 11.9076 10.5397 11.8649 10.5813L10.5655 11.8726C10.477 
                                11.9545 10.3611 12 10.2406 12C10.1202 12 10.0042 11.9545 9.91579 11.8726L6.31391 8.29573C6.27149 8.25254 6.22092 8.21824 6.16515 
                                8.19483C6.10938 8.17141 6.04952 8.15936 5.98906 8.15936C5.9286 8.15936 5.86874 8.17141 5.81297 8.19483C5.7572 8.21824 5.70663 8.25254 5.66421 
                                8.29573L2.08513 11.8612C1.99669 11.9431 1.88069 11.9886 1.76028 11.9886C1.63987 11.9886 1.52388 11.9431 1.43543 11.8612L0.136018 10.5813C0.0929388 
                                10.5387 0.0587282 10.488 0.0353769 10.4321C0.0120256 10.3762 0 10.3162 0 10.2556C0 10.195 0.0120256 10.1349 0.0353769 10.079C0.0587282 10.0231 0.0929388 
                                9.97242 0.136018 9.92988L3.72649 6.33017C3.76957 6.28763 3.80378 6.23693 3.82713 6.18102C3.85049 6.12511 3.86251 6.06509 3.86251 6.00448C3.86251 5.94386 
                                3.85049 5.88385 3.82713 5.82793C3.80378 5.77202 3.76957 5.72132 3.72649 5.67879L0.136018 2.0905C0.0929388 2.04797 0.0587282 1.99727 0.0353769 1.94135C0.0120256 
                                1.88544 0 1.82543 0 1.76481C0 1.70419 0.0120256 1.64418 0.0353769 1.58827C0.0587282 1.53235 0.0929388 1.48166 0.136018 1.43912L1.44683 0.136368C1.48925 0.093178 
                                1.53982 0.0588794 1.59559 0.035468C1.65136 0.0120565 1.71122 0 1.77168 0C1.83214 0 1.892 0.0120565 1.94777 0.035468C2.00354 0.0588794 2.05411 0.093178 2.09653 
                                0.136368L5.6984 3.72466C5.78685 3.80658 5.90284 3.85207 6.02326 3.85207C6.14367 3.85207 6.25966 3.80658 6.34811 3.72466L9.89299 0.147795C9.93542 
                                0.104606 9.98598 0.070307 10.0418 0.0468956C10.0975 0.0234842 10.1574 0.0114277 10.2178 0.0114277C10.2783 0.0114277 10.3382 0.0234842 10.3939 
                                0.0468956C10.4497 0.070307 10.5003 0.104606 10.5427 0.147795L11.8421 1.43912Z" fill="#FE5F5F"
                            />
                        </svg>
                    </button>
                    <div class="text-center w-full font-bold text-3xl text-highlight-red p-4">
                    LOGIN
                    </div>
                    <div
                        class="w-full bg-gray-200 my-3" style="height: 1px"
                    ></div>
                    <form>
                        <div class="flex flex-col gap-4 px-0 py-4">
                            <div>
                            <label class="text-highlight-blue">Email address</label>
                            <svg xmlns="http://www.w3.org/2000/svg" class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="grey">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input
                                class="py-2 pl-10 border border-gray-200 w-full"
                                placeholder="Email address"
                                type="email"
                                v-model='loginEmailInput'
                                v-bind:class='{error: isError }'
                            />
                            </div>
                            <div>
                            <label class="text-highlight-blue">Password</label>
                            <svg xmlns="http://www.w3.org/2000/svg" class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="grey">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input
                                class="py-2 pl-10 border border-gray-200 w-full"
                                placeholder="Password"
                                type="password"
                                v-model='loginPassInput'
                                v-bind:class='{error: isError }'
                            />
                            <span class='text-10px text-primary-text'>*Password must contain at least 8 characters</span>
                            </div>
                            <div class="w-full flex flex-row gap-2">
                            <button
                                class="border 
                                border-blue-700 
                                hover:bg-dark-blue 
                                hover:text-button-text 
                                duration-100 
                                ease-in-out 
                                w-6/12  
                                p-0 flex 
                                flex-row 
                                justify-center 
                                items-center gap-1"
                                type="submit"
                                @click='login'
                            >
                                <Spinner v-if='isProcessing'/>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg> 
                                Login
                            </button>
                            <button @click='toggleSignIn' class="border border-blue-700 hover:bg-dark-blue hover:text-white duration-100 ease-in-out w-6/12 text-dark-blue p-2 flex flex-row justify-center items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg> Sign-up
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center min-h-screen" v-else>  
                <div class="container md-1:border-none mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white relative"> 
                    <button class='absolute top-4 right-4' @click='closeModal' type="button">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8421 1.43912C11.8848 
                                1.48067 11.9188 1.5304 11.942 
                                1.58537C11.9652 1.64033 11.9772 1.69941 11.9772 1.7591C11.9772 1.81878 
                                11.9652 1.87786 11.942 1.93283C11.9188 1.98779 11.8848 2.03752 11.8421 2.07907L8.28583 5.71307C8.24308 
                                5.75462 8.2091 5.80435 8.18589 5.85932C8.16269 5.91428 8.15073 5.97336 8.15073 6.03305C8.15073 6.09273 8.16269 6.15181 
                                8.18589 6.20678C8.2091 6.26174 8.24308 6.31147 8.28583 6.35302L11.8649 9.94131C11.9076 9.98286 11.9416 10.0326 11.9648 10.0876C11.988 
                                10.1425 12 10.2016 12 10.2613C12 10.321 11.988 10.3801 11.9648 10.435C11.9416 10.49 11.9076 10.5397 11.8649 10.5813L10.5655 11.8726C10.477 
                                11.9545 10.3611 12 10.2406 12C10.1202 12 10.0042 11.9545 9.91579 11.8726L6.31391 8.29573C6.27149 8.25254 6.22092 8.21824 6.16515 
                                8.19483C6.10938 8.17141 6.04952 8.15936 5.98906 8.15936C5.9286 8.15936 5.86874 8.17141 5.81297 8.19483C5.7572 8.21824 5.70663 8.25254 5.66421 
                                8.29573L2.08513 11.8612C1.99669 11.9431 1.88069 11.9886 1.76028 11.9886C1.63987 11.9886 1.52388 11.9431 1.43543 11.8612L0.136018 10.5813C0.0929388 
                                10.5387 0.0587282 10.488 0.0353769 10.4321C0.0120256 10.3762 0 10.3162 0 10.2556C0 10.195 0.0120256 10.1349 0.0353769 10.079C0.0587282 10.0231 0.0929388 
                                9.97242 0.136018 9.92988L3.72649 6.33017C3.76957 6.28763 3.80378 6.23693 3.82713 6.18102C3.85049 6.12511 3.86251 6.06509 3.86251 6.00448C3.86251 5.94386 
                                3.85049 5.88385 3.82713 5.82793C3.80378 5.77202 3.76957 5.72132 3.72649 5.67879L0.136018 2.0905C0.0929388 2.04797 0.0587282 1.99727 0.0353769 1.94135C0.0120256 
                                1.88544 0 1.82543 0 1.76481C0 1.70419 0.0120256 1.64418 0.0353769 1.58827C0.0587282 1.53235 0.0929388 1.48166 0.136018 1.43912L1.44683 0.136368C1.48925 0.093178 
                                1.53982 0.0588794 1.59559 0.035468C1.65136 0.0120565 1.71122 0 1.77168 0C1.83214 0 1.892 0.0120565 1.94777 0.035468C2.00354 0.0588794 2.05411 0.093178 2.09653 
                                0.136368L5.6984 3.72466C5.78685 3.80658 5.90284 3.85207 6.02326 3.85207C6.14367 3.85207 6.25966 3.80658 6.34811 3.72466L9.89299 0.147795C9.93542 
                                0.104606 9.98598 0.070307 10.0418 0.0468956C10.0975 0.0234842 10.1574 0.0114277 10.2178 0.0114277C10.2783 0.0114277 10.3382 0.0234842 10.3939 
                                0.0468956C10.4497 0.070307 10.5003 0.104606 10.5427 0.147795L11.8421 1.43912Z" fill="#FE5F5F"
                            />
                        </svg>
                    </button>
                    <div class="text-center my-6">
                        <h1 class="text-3xl font-semibold text-highlight-red">Sign up</h1>
                        <p class="text-gray-500">Create a new account</p>
                    </div>
                    <div class="m-6">
                        <form class="mb-4">
                            <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Your email address" 
                                class="w-full px-3 py-2 
                                placeholder-gray-300 
                                border 
                                border-gray-300 rounded-md 
                                focus:outline-none focus:ring 
                                focus:ring-indigo-100 
                                focus:border-indigo-300 
                                dark:bg-gray-700 dark:text-white 
                                dark:placeholder-gray-500 
                                dark:border-gray-600 
                                dark:focus:ring-gray-900 
                                dark:focus:border-gray-500" 
                                v-model='email'
                                v-bind:class='{error: isError }'/>
                            </div>
                            <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Your password" 
                                class="w-full 
                                px-3 py-2 
                                placeholder-gray-300 
                                border border-gray-300 
                                rounded-md focus:outline-none 
                                focus:ring focus:ring-indigo-100 
                                focus:border-indigo-300 dark:bg-gray-700 
                                dark:text-white dark:placeholder-gray-500 
                                dark:border-gray-600 dark:focus:ring-gray-900 
                                dark:focus:border-gray-500" 
                                v-model='password' 
                                v-bind:class='{error: isError }'
                            />
                            <span class='text-10px text-primary-text'>*Password must contain at least 8 characters</span>
                            </div>
                            <div class="mb-2">
                            <button @click='createAccount' 
                                type="button" 
                                class="w-full 
                                px-3 py-4 text-button-text 
                                bg-dark-blue rounded-md 
                                hover:bg-indigo-600 
                                focus:outline-none 
                                duration-100 ease-in-out
                                flex justify-center items-center">
                                <Spinner v-if='isProcessing'/>
                                Create Account</button>
                            </div>
                            <div class="mb-6">
                            <button @click='toggleSignIn' type="button" class="w-full px-3 py-4 text-button-text bg-dark-blue rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Login</button>
                            </div>
                        </form>    
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
            isProcessing: false,
            isLogin: true,
            email: '',
            password: '',
            loginEmailInput: '',
            loginPassInput: '',
            isError: false,
        }
    },
    methods: {
        toggleSignIn() {
            this.isLogin = !this.isLogin;
        },
        verifyEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        verifyPass(pass) {
            return pass.length > 8;
        },
        verifyAccountData() {
            if(this.verifyEmail(this.email) && this.verifyPass(this.password)){
                localStorage.setItem('email', this.email);
                localStorage.setItem('pass', this.password);
                this.isError = false;
                this.$router.push({ name: 'Profile' });
            }else {
                this.isError = true;
            }
        },
        createAccount(event) {
            event.preventDefault();
            this.isProcessing = true;
            setTimeout(() => {
                this.verifyAccountData();
                this.isProcessing = false;
            }, 2000)
        },
        login(event) {
            event.preventDefault();
            this.isProcessing = true;
            setTimeout(() => {
                let localStorageEmail = localStorage.getItem('email');
                let localStoragePass = localStorage.getItem('pass');
                this.checkLoginData(localStorageEmail, localStoragePass);
                this.isProcessing = false;
            }, 2000);
        },
        closeModal() {
            this.$emit('close-modal-window');
        },
        checkLoginData(localStorageEmail, localStoragePass) {
            if(this.loginEmailInput === localStorageEmail && this.loginPassInput === localStoragePass){
                this.isError = false;
                this.$router.push({ name: 'Profile' });
            }else{
                this.isError = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup-container{
        max-width: 700px;
        width: 100%;
    }
    .error{
        border-color: #FE5F5F;
    }
</style>