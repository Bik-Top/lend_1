<template>
    <div class="bod">

        <!-- PRELOADER -->

        <div id="preloader"><img src="images/nbloader1.gif" alt=""></div>

        <!-- MAIN NAV -->
        <a id="main-nav" href="#sidr"><span
                class="flaticon-menu9"></span></a>

        <div id="sidr" class="sidr">

            <!-- MAIN NAV LOGO -->
            <a href="#" id="menu-logo"><img src="../src/assets/images/menu-logo2.png" alt=""></a>

            <ul>
                <li><a href="#Home" ><span class="icons flaticon-house3"></span>Home</a>
                </li>
                <li><a href="#Features" ><span class="icons flaticon-drawer1"></span>Features</a>
                </li>
                <li><a href="#About" ><span class="icons flaticon-cursor7"></span>About</a>
                </li>
                <li><a href="#Video" ><span class="icons flaticon-key9"></span>Video</a>
                </li>
                <li><a href="#Clients" ><span class="icons flaticon-comment2"></span>Clients</a>
                </li>
                <li><a href="#Screenshots" ><span class="icons flaticon-camera19"></span>Screenshots</a>
                </li>
                <li><a href="#Pricing" ><span class="icons flaticon-tag10"></span>Pricing</a>
                </li>
                <li><a href="#Download" ><span class="icons flaticon-download11"></span>Download</a>
                </li>
                <li><a href="#Contact" ><span class="icons flaticon-small72"></span>Contact</a>
                </li>
            </ul>
        </div>
        <!-- END MAIN NAV -->

        <!-- PAGE LOGO -->
        <div class="wrap">
            <div id="logo">
                <a href="#"><img src="../src/assets/images/neighbiz-logo.png" alt=""> </a>
                <p class="tagline">We're about community. Handshakes. Business, big and small. Connecting with
                    community.</p>
            </div>
        </div>
        <!-- END PAGE LOGO -->

        <!-- LANDING PAGE CONTENT -->
        <div id="fullpage">



            <Home id="section0"></Home>
            <Features id="section1"></Features>
            <About id="section2"></About>
            <Video id="section3"></Video>
            <Clients id="section4"></Clients>
            <Screenshots id="section5"></Screenshots>
            <Pricing id="section6"></Pricing>
            <Download id="section7"></Download>
            <Contact id="section8"></Contact>
            <!-- отображаем тут компонент, для которого совпадает маршрут
            <router-view></router-view>
            <button v-scroll-to="{el:'#section0', onDone:onDone}" v-show="showGoBack" class="showGoBack" > go back</button>-->
        </div>

        <!-- SOCIAL ICONS -->
        <div class="wrap">
            <div id="social-icons">
                <ul>
                    <li><a href=""><i class="flaticon-facebook6"></i></a> </li>
                    <li><a href=""><i class="flaticon-social19"></i></a> </li>
                    <li><a href=""><i class="flaticon-google16"></i></a> </li>
                    <li><a href=""><i class="flaticon-social40"></i></a> </li>
                    <li><a href=""><i class="flaticon-social7"></i></a> </li>
                    <li><a href=""><i class="flaticon-logo3"></i></a> </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import Home from './vives/Home'
    import Features from './vives/Features'
    import About from './vives/About'
    import Video from './vives/Video'
    import Clients from './vives/Clients'
    import Screenshots from './vives/Screenshots'
    import Pricing from './vives/Pricing'
    import Download from './vives/Download'
    import Contact from './vives/Contact'

    export default {
        name: 'app',

        data() {
            return {
                currentRoute: window.location.pathname,
                showSidebar: false,
                showGoBack: false
            }
        },
        components: {
            Home,
            Features,
            About,
            Video,
            Clients,
            Screenshots,
            Pricing,
            Download,
            Contact
        },
        methods: {
            afterLeave () {
                this.$root.$emit('triggerScroll')
            },


            onDone(el) {
                this.showGoBack = !this.showGoBack;
                console.log( this )
            },
            showSidebarHendler() {

                if (this.showSidebar) {
                    document.body.classList.remove('sidr-open')
                    sidr.style.display = ''
                } else {
                    document.body.classList.add('sidr-open')
                    sidr.style.display = 'block'
                }
                this.showSidebar = !this.showSidebar;
            },
        }

    }
</script>

<style>
    .showGoBack {
        position: absolute;
        bottom: 10%;
        right: 10%;
    }
</style>
