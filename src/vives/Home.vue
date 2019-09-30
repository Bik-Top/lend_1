<template>
    <div class="section" id="Home">

        <!-- RIGHT HAND & PHONE MOCK-UP IMAGES -->
        <div class="wrap">
            <div class="section-image">
                <!-- Home IMAGE --><img src="images/hello3.jpg" alt="Handy Help">
                <!-- Features IMAGE --><img src="images/HH2.jpg" alt="Features">
                <!-- About IMAGE --><img src="images/profile-lp.jpg" alt="About">
                <!-- Video IMAGE --><img src="images/hello3.jpg" alt="Video">
                <!-- Clients IMAGE --><img src="images/jumpmenu.jpg" alt="HH Jump Menu">
                <!-- Screenshots IMAGE --><img src="images/HH.jpg" alt="Screenshots">
                <!-- Pricing IMAGE --><img src="images/hello3.jpg" alt="Pricing">
                <!-- Download IMAGE --><img src="images/huddles2.jpg" alt="Download">
                <!-- Contact IMAGE --><img src="images/contactKriekie.jpg" alt="Contact">
            </div>
            <div id="hand"></div>
        </div>
        <!-- END RIGHT HAND & PHONE MOCK-UP -->
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
