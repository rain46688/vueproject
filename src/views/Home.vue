<template>
    <div>
        <h1>홈페이지 기본 {{title}}</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">버튼</button>
        <button type="button" @click="setData">버튼2</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"하이하이",
            title2:"핼로우",
            input1 : "ㅎㅎ",
        };
    },
    methods:{
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = "123123";
        }
    }
}
</script>