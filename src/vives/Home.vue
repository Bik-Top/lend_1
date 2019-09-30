<template>
    <div class="section" id="Home">

        <div class="wrap">
            <div class="box">
                <!-- SECTION HOME CONTENT -->
                <h1>The online search is now <br><strong>a treasure hunt</strong></h1>
                <h3 font color = "#ff6633"> <strong>300,000 listings and counting
                </strong>- is your biz here?.</h3>
                <!---->
                <form role="form" method="post" id="contact-form">
                    <input type="text" placeholder="Business" name="Business" id="business" required>


                    <div id="success"></div>
                </form>

            </div>
            <!-- END SECTION HOME CONTENT -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data(){
            return {
            }
        },
        components: {
        },


 /*       created() {
            fetch('https://api.myjson.com/bins/s9lux')
                .then(res => res.json())
                .then(res => {
                    this.cats = res;
                })
        },

        computed: {
            username () {
                // Мы скоро разберём что такое `params`
                return this.$route.params.username
            }
        },
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
*/
    }
</script>

<style></style>
