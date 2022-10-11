<script setup lang="ts">
import {Game} from "~/game"
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const game = new Game(canvas.value)
  window.addEventListener("keydown", (event) => game.addKeydownEvent(event.key))
  window.addEventListener("keyup", (event) => game.addKeyupEvent(event.key))
  console.log('mapItemList', game.map.mapItemList)
})
</script>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style>
body {
  background-color: black;
}
</style>