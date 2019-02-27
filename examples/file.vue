<template>
    <div id="app">
        <img src="./assets/logo.png" />
        <HelloWorld @click="this.sayHello">Hello Word</HelloWorld>
    </div>
</template>

<script>
    /* eslint-disable */
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        mounted() {
            this.sayHello();
        },
        methods:{
            sayHello() {
                console.log('Hello Word!');
            }
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
