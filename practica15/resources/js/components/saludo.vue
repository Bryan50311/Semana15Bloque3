<template>
    <div>
        <h1>Hola desde vue</h1>
     <input v-model="nombre" type="text" placeholder="Ingresa tu nombre">
     <p>{{ nombre }}</p>
    </div>
</template>

<script>
export default {
    name: 'saludo',
    data() {
        return {
            message: 'Hola desde vue'
        }
    }
}
</script>
<style scoped>
    h1 {
        color: rgb(111, 0, 255);
    }
</style>    