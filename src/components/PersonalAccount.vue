<template>
  <div class="account-page">
    <header>
        <nav>
            <div class="logo"></div>
           <router-link class="toLogin" to="/" tag="button">Переводчик</router-link>

        </nav>
    </header>
    <div class="content">
        <div class="word-list">
            <h3>Словарь:</h3>
            <p v-for="word in getWords()">{{word.rus}} : {{word.eng}}</p>
            <div class="addWord">
                <input type="text" v-model="russian" placeholder="Русский">
                <input type="text" v-model="english" placeholder="English">
                <button @click='addWord()' class="toLogin">Добавить слово</button>
            </div>
            
        </div>
        <div class="main">
            <h2>Упражнения для запоминания слов</h2>
            <div class="repeat-container">
                <div class="repeat-type">
                    <h3>Повтори правописание слов</h3>
                    <router-link to="Repeat" tag="button">Повторить слова</router-link>
                </div>
               
            </div>
           

        </div>
    </div>
    
</div>
</template>

<script>


export default {
    data() {
        return {
            russian: '',
            english: '',
        }
    },
    methods: {
        getWords(){
            if(localStorage.words != undefined){
                return JSON.parse(localStorage.getItem('words'))
            }
        },
       addWord(){
            let words = [];
            if(localStorage.words != undefined){
                words =  JSON.parse(localStorage.getItem('words'))
            }

            words.push({rus: this.russian, eng: this.english});

            localStorage.setItem('words', JSON.stringify(words));
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
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 86vh;
}

.word-list{
    width: 20%;
    border-right: 2px solid #ffde59;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.word-list h3{
    letter-spacing: 2px;
    font-size: 30px;
    border-bottom: 2px solid #ffde59;
    width: 100%;
    text-align: center;
}

.word-list p{
    margin: 7px;
}

.main{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
}

.main h2{
    font-size: 30px;
    letter-spacing: 2px;
}

.main h3{
    font-size: 25px;
    font-style: italic;
}

.repeat-type{
    margin-bottom: 20px;
}

.repeat-type button{
    margin-top: 20px; 
    margin-right: 10px;
    height: 50%;
    padding: 10px;
    border: 2px solid #ffde59;
    background: transparent;    
    transition: 1s;
}

.repeat-type button:hover{
    background: #ffde59;
    transition: 1s;
}

.addWord{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}   



@media (orientation: portrait) {
    .toLogin{
        font-size: 30px;
    }

    .content{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        min-height: 86vh;
    }
    
    .word-list{
        width: 100%;
        border-right: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    .word-list h3{
        letter-spacing: 2px;
        font-size: 50px;
        border-bottom: 2px solid #ffde59;
        width: 100%;
        text-align: center;
    }

    .word-list p{
        font-size: 40px;
        margin: 7px;
    }
    

    .addWord{
        display: flex;
        flex-direction: column;
    }

    input{
        width: 500px;
        height: 80px;
        font-size: 30px;
    }

    .addWord button{
         width: 500px;
        height: 80px;
        font-size: 30px;
    }

    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
    }


    .main h2{
        font-size: 45px;
        letter-spacing: 2px;
    }   

    .main h3{
        font-size: 35px;
        font-style: italic;
    }

    .repeat-type button{
        height: 50%;
        padding: 90px;
        font-size: 50px;
    }

    .repeat-type{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}


</style>