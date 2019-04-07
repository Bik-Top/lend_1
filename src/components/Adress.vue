<template>
    <table class="Adres" cellspacing="0" border="1">
        <caption colrow="5"><p>Adres</p></caption>
        <tbody>
        <tr>
            <th>№</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>phone</th>
        </tr>

        <tr v-for="(pupil, index ) in pupils" :key="index" >

            <td scope="row">{{index}}</td>
            <td>{{pupil.name}}</td>
            <td>{{pupil.age}}</td>
            <td>{{pupil.adress}}</td>
            <td><p style="white-space: nowrap;">{{pupil.phone}}</p></td>

            <!--<td> <button @click="filteredNames">filteredNames</button></td>-->

        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {

        props: {
            pupils: Array
        },
        data(){
           return{
               pupilsParam: [],
               serchName: ''
           }
        },

    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    caption{
        background-color: rgba(255, 0, 255, 0.25);
    }
</style>
