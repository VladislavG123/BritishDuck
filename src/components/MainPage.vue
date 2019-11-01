<template>
<div class="main-page">

    <div v-show="isMessageActive" class="message">
        <h1>{{message}}</h1>
    </div>

    <header>
        <nav>
            <div class="logo"></div>
            <router-link class="toLogin" to="Account" tag="button">Личный кабинет</router-link>

        </nav>
    </header>

    <div class="translater">
        <div class="first-box type-box">
            <h3 class="lang-title" >{{requestLang}}</h3>
            <textarea v-model="responseText"></textarea>
        </div>
        <div class="edit-block">
            <div class="i-container" @click="changeLang()" ><i class="fas fa-exchange-alt"></i></div>
            <div class="i-container" @click="saveTraslation()"><i class="far fa-bookmark"></i></div>
        </div>
        <div class="second-block type-box">
            <h3 class="lang-title">{{responseLang}}</h3>
            <textarea id="responseTextarea" :value="translate()" readonly></textarea>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            responseText: '', 
            requestLang: 'Русский',
            responseLang: 'English',
            message: '',
            isMessageActive: false
        }
    },
    methods: {

        toMessage(text){
            this.message = text;
             this.isMessageActive = true;
            setTimeout(()=>{
                this.isMessageActive = false;
            }, 3000)
        },

        changeLang(){
            let temp = this.requestLang;
            this.requestLang = this.responseLang;
            this.responseLang = temp;
        },

        toShort(lang){
            switch (lang) {
                case 'Русский':
                    return 'ru'
                 
                default:
                    return 'en'
                    
            }
        },

        translate(){
            var keyAPI = "trnsl.1.1.20191028T064433Z.433087472ccc9f0d.5681d64acee4a06e080c2cd70f8135e92238633b";

            var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + keyAPI + '&text=' + this.responseText + '&lang='+this.toShort(this.requestLang)+'-'+this.toShort(this.responseLang);
            $.getJSON(url, function(data) {
                console.log(data);
                $('#responseTextarea').val(data.text[0]);
            }).catch((value) => { 
                $('#responseTextarea').val(''); 
                });
            
        },

        saveTraslation(){
            console.log('save', this.responseText);
            var words = [];
            if (localStorage.getItem('words') != undefined) {
                words = JSON.parse(localStorage.words)
            }
            if (this.requestLang == 'Русский') {
            words.push({
                    rus: this.responseText,
                    eng: $('#responseTextarea').val()
                })  
            } 
            else{
                words.push({
                    eng: this.responseText,
                    rus: $('#responseTextarea').val()
                })
            }
            localStorage.setItem('words', JSON.stringify(words))

            this.toMessage('Перевод успешно сохранен в Ваш словарь!')
        }

    },  
}
</script>


<style scoped>
input, button, textarea {outline:none;}

.message{
    position: fixed;
    bottom: 0;
    font-size: 10px;
    padding: 10px;
    background: radial-gradient(#ffde59, transparent);
    color: rgb(97, 97, 97);
}

body{
    height: 100vh;
}
.toLogin{
    margin: auto 0;
    margin-right: 10px;
    height: 50%;
    padding: 10px;
    border: 2px solid #ffde59;
    background: transparent;    
    transition: 1s;
}

.toLogin:hover{
    background: #ffde59;
    transition: 1s;
}
textarea {
    resize: none;
    width: 100%;
    height: 300px;
    font-size: 20px;
    margin-top: 10px;
}


header{
    background: white;
    height: 14vh;
    display: flex;
    align-items: center;
}

nav {
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(230, 228, 228, 0.507);
}

.logo {
    background: url('../assets/logo.png');
    background-size: cover;
    width: 9vh;
    height: 9vh;
}

.translater{
    margin: auto 0;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;

}

.translater h3{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
}

.edit-block{
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
}


.edit-block .i-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #ffde59;
    border: 3px solid #ffde59;
    border-radius: 50%;
    transition: 1s;
}

.edit-block .i-container:hover{
    padding: 13px;
    transition: 1s;
    background: #ffde59;
    color: black
}

.type-box{
    width: 35%;
}


</style>