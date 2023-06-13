const {createApp} = Vue 

createApp({
    data(){
        return{
            emailList: [''],
            singleEmail:''
        }
    },
    methods: {

    },

    created(){
        for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            
            const result= response.data
            
            this.singleEmail = result.response
            
            this.emailList.push(this.singleEmail)
            
            this.singleEmail = ''
            
        })
        }
    }
}).mount('#app')