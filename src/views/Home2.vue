<template>
    <div id="home2">
        <h1>Q11</h1>
        <h1>병원에서 치료를 받으셨나요?</h1>

        <b-button-group id="buttonDiv" size="lg">
        <b-button
            class="yesnobutton"
            v-for="(btn, idx) in buttons"
            :key="idx"
            :pressed.sync="btn.state"
            variant="outline-warning"
            v-on:click="setactive(btn.num)">
            <div class="iconDiv"><b-icon id="icon" :icon="btn.symbol" :scale="btn.size"></b-icon></div>
            <div class="textDiv">{{ btn.caption }}</div>
        </b-button>
        </b-button-group>

        <div id="BottomButtonDiv">
            <b-button variant="light" @click="prev">이전</b-button>
            <b-button variant="danger">다음</b-button>
        </div>
    </div>
</template>
<script>
export default {


     data() {
      return {
        buttons: [
          { num:'0', caption: '네', state: false, symbol:'circle', size:'5'},
          { num:'1', caption: '아니오', state: false, symbol:'x', size:'10' },
        ]
      }
    },


     methods: {
        prev() {
            for(let i in this.buttons){
                if(this.buttons[i].state){
                    localStorage.setItem("check2", i);
                    this.$router.push('/');
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
     let num = localStorage.getItem("check2");
     this.buttons[num].state = true;
  },

};
</script>
<style scoped>

#home2{
    margin:5vh;
}

#home2 h1{
    margin-top:2vh;
    font-weight:bold;
}

#buttonDiv{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    align-items:center;
}

#buttonDiv button{
    width:100%;
    height:30vh;
    margin:2vh;
    font-weight: bold;
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

.yesnobutton{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
}

.iconDiv{
    height:40%;

}

.textDiv{
    height:5%;
    font-size:5vh;
    font-weight:bold;
}

</style>