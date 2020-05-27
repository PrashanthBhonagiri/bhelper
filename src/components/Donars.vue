<template>
<div class="container">
  <h1 style="color:blue">Blood Donars List</h1>
 <v-app id="inspire" class="container">
   <v-btn @click="fun()" style="width:50%">
     <span v-if="showFilter"> Hide Filter</span>
     <span v-if="!showFilter"> Show Filter</span>
   </v-btn>
    <div v-if="showFilter">
      <v-form ref="form">
      <v-radio-group
        v-model="filter"
        :mandatory="true"
      >
      <div class="container">
        <div class="row">
          <div class="col-6">
            <v-radio label="A+" value="A_POS"></v-radio>
          </div>
          <div class="col-6">
            <v-radio label="A-" value="A_NEG"></v-radio>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <v-radio label="B+" value="B_POS"></v-radio>
          </div>
          <div class="col-6">
            <v-radio label="B-" value="B_NEG"></v-radio>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <v-radio label="O+" value="O_POS"></v-radio>
          </div>
          <div class="col-6">
            <v-radio label="O-" value="O_NEG"></v-radio>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <v-radio label="AB+" value="AB_POS"></v-radio>
          </div>
          <div class="col-6">
            <v-radio label="AB-" value="AB_NEG"></v-radio>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <v-radio label="Show All" value=""></v-radio>
          </div>
        </div>
      </div>
      </v-radio-group>
      <v-btn @click="submit()">Apply Filter</v-btn>
    </v-form>
    </div>
     <v-layout row wrap>
        <v-flex xs12 md4 v-for="donar in donarsList" :key="donar.id"
            style="padding:10px" id="details">
            <v-card class="mx-auto" style="padding:5px" outlined>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            {{donar.BG_Group}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-card-text>
                    Name : {{donar.Name}}
                </v-card-text>
                <v-card-text>
                    Phone Number : {{donar.Contact_No}}<br>
                    <!-- {{donar.Batch}} -->
                </v-card-text>
            </v-card>
        </v-flex>
     </v-layout>
 </v-app>
 </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'Donars',
  data() {
    return {
      donarsList: [],
      filter: '',
      query: '',
      showFilter: false,
    };
  },
  watch: {
    donarsList: {
      handler() {
        // console.log("todos Changed");
        localStorage.donarsList = JSON.stringify(this.donarsList);
      },
      deep: true,
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      API.getDonars()
        .then((donars) => {
          this.donarsList = donars;
        });
    },
    filterFun(donar) {
      return donar.Blood_Group === this.filter;
    },
    submit() {
      this.query = `?group=${this.filter}`;
      // console.log(this.query);
      API.getDonarswithBG(this.query)
        .then((Dlist) => {
          this.donarsList = Dlist;
        });
      // console.log();
      document.getElementById('details').innerHTML = JSON.parse(this.donarsList.filter(this.filterFun));
      this.fun();
    },
    fun() {
      this.showFilter = !this.showFilter;
    },
  },
};
</script>
