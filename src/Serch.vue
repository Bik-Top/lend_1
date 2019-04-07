<template>
  <div id="serch">
    <h3>{{title}}</h3>
    <HelloWorld :msg="msg"/>

    <input type="text" v-model="serchName">

    <ul>
        <template>
            <transition name="slide-fade" v-for='name in filteredNames' :key="name">
                  <li>
                      {{name}}
                  </li>
            </transition>
        </template>
    </ul>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'Serch',// имя компонента
        components: {
            HelloWorld
        },
        data(){
            return{
                title: 'title APP',
                msg: "Welcome to Your Vue.js App",
                serchName: '',
                names: ['belka', 'strelka', 'layka', 'guchka', 'roketa', 'malva', 'indra', 'kayya']
            }
        },
        computed:{
            filteredNames(){
                return this.names.filter( name => {
                    return name.indexOf(this.serchName) !== -1 ;
                })
            }
        }
    }
</script>

<style>
  #serch {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding: 0 15px;
  }
  ul {
    text-align: center;
    padding: 0;
    list-style: none;
    margin: 15px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px 15px;
  }
  li{
    background-color: #f0f0f0;
  }





  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
