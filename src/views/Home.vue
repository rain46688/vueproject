<template>
    <div id="home1">
        <h1>Q10</h1>
        <h1>화상 상처의 크기는<br> 어느 정도 인가요?</h1>
        <h3>(엄지와 검지 손가락으로 ok 모양을 만들어<br>생기는 원의 지름이 3cm입니다.)</h3>
   
        <b-button-group id="buttonDiv" size="lg">
        <b-button
            v-for="(btn, idx) in buttons"
            :key="idx"
            :pressed.sync="btn.state"
            variant="outline-warning"
            v-on:click="setactive(btn.num)">
            {{ btn.caption }}
        </b-button>
        </b-button-group>

        <div id="BottomButtonDiv">
            <b-button variant="light">이전</b-button>
            <b-button variant="danger" @click="next">다음</b-button>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        buttons: [
          { num:'0', caption: '3cm 미만', state: false },
          { num:'1', caption: '3cm 이상 ~ 손바닥 미만', state: false },
          { num:'2', caption: '손바닥 이상', state: false },
        ]
      }
    },
    methods: {
        next() {
            for(let i in this.buttons){
                if(this.buttons[i].state){
                    localStorage.setItem("check", i);
                    this.$router.push('/h2');
                }
            }
        },
         setactive: function(num) {
            for(let i in this.buttons){
                this.buttons[i].state = false;
            }
            this.buttons[num].state = true;
        },
    },

    created() {
     let num = localStorage.getItem("check");
     this.buttons[num].state = true;
  },

  }
</script>
<style scoped>

#home1{
    margin:5vh;
}

#home1 h1{
    margin-top:2vh;
    font-weight:bold;
}

#home1 h3{
    margin-top:2vh;
    color:gray;
}

#buttonDiv{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
}

#buttonDiv button{
    width:100%;
    height:10vh;
    margin:2vh;
    font-weight: bold;
    color:gray;
    box-shadow: 5px 5px 5px rgb(200, 200, 200, 0.3);
}

#BottomButtonDiv{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    align-items:center;
}

#BottomButtonDiv button{
    width:50%;
    margin:2vh;
    height:10vh;
    font-weight: bold;
    color:white;
    font-size:4vh;
    box-shadow: 5px 5px 5px rgb(200, 200, 200, 0.3);
}

</style>