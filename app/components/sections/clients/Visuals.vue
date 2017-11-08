<template>
    <section :class="className">
        <div class="close" @click="destroySwiper">
            <img src="images/close.svg" alt="Close slideshow">
        </div>
        <nav class="navigation">
            <div class="prev" @click="prevSlide">
                <img src="images/arrow.svg" alt="Previous Image">
            </div>
            <div class="next" @click="nextSlide">
                <img src="images/arrow.svg" alt="Next Image">
            </div>
        </nav>
        <swiper :options="swiperOptions" :not-next-tick="notNextTick" ref="visualsSwiper">
            <swiper-slide v-for="(slide, i) in slides" :key="i">
                <img :src="slide" @click="initSwiper">
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

                },
                active: false,
                activeSlide: 0,
                slides: []
            }
        },
        props: ['name', 'imageCount'],
        components: {
            swiper, 
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.visualsSwiper.swiper;
            },
            className() {
                if (this.active) {
                    return "visuals active"
                }

                return "visuals";
            },
            imageFolder() {
                return "images/" + this.name + "/";
            },
            body() {
                return document.querySelector('body');
            }
        },
        methods: {
            destroySwiper() {
                this.enableScroll();
                this.activeSlide = this.swiper.activeIndex;
                this.swiper.destroy(false);
                this.active = false;
            },
            initSwiper() {
                if (this.active) {
                    return;
                }

                this.swiper.params.initialSlide = this.activeSlide;
                this.disableScroll();
                this.swiper.init();
                this.active = true;
            },
            createSlides() {
                for (var i = 0; i < this.imageCount; i++) {
                    const str = this.imageFolder + (i+1) + ".png";
                    this.slides.push(str);
                }
            },
            keypressHandler(e) {
                if (!this.active) {
                    return;
                }

                switch (e.key) {
                    case 'Escape': {
                        this.destroySwiper();
                        break;
                    }
                    case 'ArrowLeft': {
                        this.prevSlide();
                        break;
                    }
                    case 'ArrowRight': {
                        this.nextSlide();
                        break;
                    }
                }

            },
            nextSlide() {
                this.swiper.slideNext();
            },
            prevSlide() {
                this.swiper.slidePrev();
            },
            disableScroll() {
                this.body.classList.add('no-scroll');
            },
            enableScroll() {
                this.body.classList.remove('no-scroll');  
            }
        },
        mounted() {
            this.destroySwiper();

            this.createSlides();

            document.addEventListener('keydown', e => this.keypressHandler(e));
        }
    }
</script>