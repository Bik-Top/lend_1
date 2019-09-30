<template>
    <table class="Animals" cellspacing="0" border="1">
        <caption colrow="5">
            <p>{{name}}</p>
        </caption>
        <tbody>

        <tr>
            <th>№</th>
            <th @click="sort('name')">Name</th>
            <th @click="sort('age')">Age</th>
            <th @click="sort('breed')">Breed</th>
            <th @click="sort('gender')">Gender</th>
        </tr>

        <tr v-for="(animal, index ) in cats" :key="index">
            <td scope="row">{{index}}</td>
            <td>{{animal.name}}</td>
            <td>{{animal.age}}</td>
            <td>{{animal.breed}}</td>
            <td>{{animal.gender}}</td>
        </tr>
        </tbody>

    </table>
</template>

<script>

    export default {
        props: {
            cats: Array,
        },

        data(){
            return {
                name: 'Animals',
            }
        },

        methods: {
            inputText(el){
                this.tempParam = el.target.value;
            },

            sort: function (s) {
                //if s == current sort, reverse
                if (s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
                }
                this.currentSort = s;


                this.cats.sort((a, b) => {
                    console.log('---a', a, '\n---b', b);
                    let modifier = 1;
                    if (this.currentSortDir === 'desc') modifier = -1;
                    if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if (a[this.currentSort] > b[this.currentSort]) return  modifier;
                    return 0;
                });
            }
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    th:hover{
        background-color: rgba(255, 0, 255, 0.25);
    }
</style>
