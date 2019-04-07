<template>
    <div id="app">

        <input type="text"  v-model="serchName" >

        <button @click="showAdress=!showAdress">
            showAdress
        </button>

        <div class="wrap" v-if="showAdress"  >
            <Adress  :pupils="pupils"  > {{tempParam}}</Adress>
        </div>



        <Animals :cats="cats"></Animals>

        <Serch/>


    </div>
</template>

<script>
    import Adress from './components/Adress.vue'
    import Animals from './components/Animals.vue'
    import Serch from './Serch.vue'

    export default {
        name: 'app',

        data(){
            return {
                showAdress: true,
                cats: [],
                currentSort: 'name',
                currentSortDir: 'asc',

                tempParam: 'changeRow',

                serchName: '',

                pupils: [
                    {name: "Maria", age: 22, registred: true, adress: "maria@gmail.dot", phone: "095 77 30 514"},
                    {name: "Jhon", age: 32, registred: true, adress: "jhonLeona@gmail.dot", phone: "095 75 30 514"},
                    {name: "Veronika", age: 25, registred: false, adress: "Veronika@gmail.dot", phone: "095 74 30 514"},
                    {name: "Tibur", age: 35, registred: false, adress: "Timur@gmail.dot", phone: "095 73 30 514"}
                ],

            }
        },
        components: {
            Adress,
            Animals,
            Serch,

        },


        created() {
            fetch('https://api.myjson.com/bins/s9lux')
                .then(res => res.json())
                .then(res => {
                    this.cats = res;
                })
        },

        methods: {
            inputText(el){
                this.tempParam = el.target.value;
            },

            sort(s) {
                //console.log('--s', s);
                //if s == current sort, reverse
                if (s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
                }
                this.currentSort = s;
            },

        },
        computed: {

        },


    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;

        display: grid;

        grid-template-columns: repeat(2, min-content);
        align-items: center;
        justify-content: center;
        grid-gap: 15px  15px;

    }
    caption{
        background-color: aquamarine;
    }
    th{
        cursor: pointer;
    }
    th:hover{
        background-color: rgba(127, 255, 212, 0.25);
    }
    td {
        padding: 5px;
    }
</style>
