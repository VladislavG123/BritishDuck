<template>
    <div class="account-page">
    <header>
        <nav>
            <div class="logo"></div>
           <router-link class="toLogin" to="Account" tag="button">Личный кабинет</router-link>
        </nav>
    </header>
    <div class="content">
       <h3>Напишите перевод слова:</h3>
       <h4>{{currentWord.rus}}</h4>
       <input v-model="usersAnswer" type="text">
       <p id="response" v-show="hasAnswered">Правильный ответ: <i>{{currentWord.eng}}</i></p>
       <button @click="checkAnswer()">Далее</button>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            words: JSON.parse(localStorage.getItem('words')),
            currentWord: JSON.parse(localStorage.getItem('words'))[Math.floor(Math.random() * JSON.parse(localStorage.getItem('words')).length)],
            hasAnswered: false,
            usersAnswer: '' 
        }
    },
    methods: {
        checkAnswer(){
            if (this.hasAnswered == true) {
                this.words= JSON.parse(localStorage.getItem('words')),
                this.currentWord = JSON.parse(localStorage.getItem('words'))[Math.floor(Math.random() * JSON.parse(localStorage.getItem('words')).length)],
                this.hasAnswered = false,
                this.usersAnswer = '' 
                return;
            }
            if (this.usersAnswer.toLowerCase() == this.currentWord.eng.toLowerCase()) {
                $('#response').removeClass('incorrect');

                $('#response').addClass('correct');
            }
            else{
                $('#response').removeClass('correct');

                $('#response').addClass('incorrect');
            }
            this.hasAnswered = true;
        }
    },
}
</script>

<style scoped>
input, button {outline:none;}

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


.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.content h3{
    font-size: 40px;
}

.content h4{
    font-size: 30px;
    letter-spacing: 2px;
    font-style: italic;
    text-decoration: underline;
    margin: 20px;
}

.content input{
    width: 20%;
    height: 30px;
    border: 2px solid #f7e085;
    font-size: 20px;
    letter-spacing: 2px;
    font-style: italic;
    text-align: center;
}


.content button{
    margin-top: 20px; 
    margin-right: 10px;
    height: 50%;
    padding: 10px;
    border: 2px solid #ffde59;
    background: transparent;    
    transition: 1s;
}

.content button:hover{
    background: #ffde59;
    transition: 1s;
}

.correct{
    color: green;
}


.incorrect{
    color: red;
}

i{
    letter-spacing: 2px;
}




@media (orientation: portrait) {
    .toLogin{
        font-size: 30px;
    }

    h3{
        font-size: 70px;
    }

    h4{
        font-size: 50px;
    }

    .content input{
       width: 60%;
       height: 70px;
       border: 2px solid #f7e085;
       font-size: 40px;
       letter-spacing: 2px;
       font-style: italic;
       text-align: center;
    }

    
    .content button{
        margin-top: 20px; 
        margin-right: 10px;
        height: 70px;
        width: 40%;
        font-size: 45px;
        border: 2px solid #ffde59;
        background: transparent;    
        transition: 1s;
    }
}

</style>