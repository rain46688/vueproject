<template>
    <div>
        <h1>홈페이지 기본 {{title}}</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">버튼</button>
        <button type="button" @click="setData">버튼2</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

    <table class="table table-bordered" v-show="tableShow">
        <tr :key="i" v-for="(d,i) in options">
            <td>{{d.v}}</td>
            <td>{{d.t}}</td>
        </tr>
    </table>

    </div>
</template>
<script>
export default {


    data(){
        return{
            title:"하이하이",
            title2:"핼로우",
            input1 : "ㅎㅎ",
            options: [
                { v: "S", t: "Seoul" },
                { v: "J", t: "Jeju" },
                { v: "B", t: "Busan" },
                ],
            region: "J",
            tableShow:true,
            
        };
    },


    methods:{
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = "123123";
        },
            changeRegion() {
        alert(this.region);
        },
    },


    watch: {
        input1() {
        console.log("change : "+this.input1);
        },
    },



    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
    },
    destroyed() {
        console.log("destroyed");
    },



};
</script>