<template>
    <div id="headerContent">
        <div id="proDiv"><b-progress id="progress" :value="value" :max="max" variant="warning" animated></b-progress></div>
        <div id="iconDiv"><b-icon id="icon" icon="x" scale="3"></b-icon></div>
    </div>
</template>
<script>
export default {
    name: "header",
    data() {
      return {
        value: 10,
        max: 100
      }
    },
};
</script>
<style scoped>

#headerContent{
    display:flex;
    flex-direction: row;
    width:100%;
}

#progress{
   margin:10vh;
   width:100%;
}

#proDiv{
    width:75%;
}

#iconDiv{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
}

</style>