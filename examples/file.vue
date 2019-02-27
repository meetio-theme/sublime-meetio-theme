<template>
    <div id="app">
        <img width="25%" src="./assets/logo.png">
        <HelloWorld @click="sayHello()" />
    </div>
</template>

<script>
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
