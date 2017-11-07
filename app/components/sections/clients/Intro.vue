<template>
    <section class="intro">
        <div :class="className">
            <img :src="image" :alt="altText">
        </div>

        <h4><a :href="url">{{ name }}</a></h4>
    </section>
</template>

<script>
    export default {
        props: ['name', 'url'],
        computed: {
            className() {
                return "client " + this.name;
            },
            image() {
                return "images/" + this.name + ".svg";
            },
            altText() {
                return "Logo for " + this.name;
            }
        }
    }
</script>