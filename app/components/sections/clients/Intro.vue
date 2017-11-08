<template>
    <section class="intro" v-in-viewport.once>
        <div :class="className">
            <img :src="image" :alt="altText">
            <div class="border-container"></div>
        </div>

        <h4><a :href="url">{{ name }}</a></h4>
    </section>
</template>

<script>
    export default {
        props: ['name', 'url', 'imageFormat'],
        computed: {
            className() {
                return "client " + this.name;
            },
            image() {
                return "images/" + this.name + "." + this.imageFormat;
            },
            altText() {
                return "Logo for " + this.name;
            }
        }
    }
</script>