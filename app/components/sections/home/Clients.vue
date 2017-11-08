<template>
    <section class="clients" id="clients">

        <h2>Clients</h2>

        <swiper :options="swiperOptions" :not-next-tick="notNextTick" ref="clientSwiper">
            <swiper-slide>
                <router-link to="/client/uniavisen" class="client uniavisen">
                    <img src="images/uniavisen.svg" alt="Logo for Uniavisen">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/client/knabstrup" class="client knabstrup">
                    <img src="images/knabstrup.svg" alt="Logo for Knabstrup Keramik">
                </router-link>
            </swiper-slide>            
            <swiper-slide>
                <router-link to="/client/eraova" class="client eraova">
                    <img src="images/eraova.png" alt="Logo for Eraova">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="client contact-link" v-scroll-to="{
                    el: '#contact-hook',
                    container: 'body',
                    duration: 1000,
                    easing: 'ease-out'
                }">You?</a>
            </swiper-slide>
        </swiper>

    </section>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        data() {
            return {
                notNextTick: true,
                swiperOptions: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    autoplay: false,
                    loop: false
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.clientSwiper.swiper;
            }
        },
        methods: {
            setup() {
                this.resize();

                window.addEventListener('resize', this.resize);
            },
            resize() {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

                if (windowWidth < 768) {
                    this.init();
                    return;
                }

                this.destroy();
            },
            destroy() {
                this.swiper.destroy(false);
            },
            init() {
                this.swiper.init();
            }
        },
        mounted() {
            this.setup();
        }
    }
</script>