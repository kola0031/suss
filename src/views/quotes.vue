<!-- <template>
<div class="row">
<div class="col" >
    <h1 class="display-4 py-3">Quote</h1>


</div>
</div>

<div class="row">
<div class="col col-6 col-lg-3 mb-3 quotes"  v-for="(quotes, index) in quotes"
:key="index">
<div class="card text-center">
<router-link v-bind:to="'/book/' + quotes.id" class="text-decoration-none"> {{ quotes.id }}</router-link>



<div class="card-body p-3">
  <ul>
    <li v-for="(text, index) in quotes.text"
    :key="index"> {{ text.text.name}}
    </li>
</ul>

</div>


</div>


</div>

</div>
</template> -->

<template>
<div class="quotes">
<router-link class="quote" v-for="quote in quotes" :key="quote.id" :to="'/quote/' + quote.id"></router-link>

</div>

</template>



<script>
export default {
    name: 'quotes' , 
    props: ['id'],
    data: function () {
      return { 
         quotes: {
          id: '', 
          text: '',
          book: [],

         }
      }
    }, 

    created: function () {
        fetch('https://seussology-api.herokuapp.com/api/quotes')
        .then(response => response.json())
        .then (json => {
          this.quotes.id = json.id,
          this.quotes.text= json.text,
          this.quotes.book = json.book
        })
        // .then(json => console.log(json))
      //  .then(json => {this.quotes =  json })

    }
}

</script>




<style></style>