<template>
  <Top/>
  <headd/>
  <step-box/>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import StepBox from "@/components/StepBox";
export default {
  name: "view-payment",
  components:{
    Top,
    headd,
    StepBox,
  },
  mounted() {
    this.getPage(this.$route.query);
  },
  methods: {
    getPage(query) {
      this.id = query.Id;
    },
    updateOrder() {
    },
  },
  data() {
    return{
      id: "",
    }
  },
}
</script>

<style scoped>

</style>
