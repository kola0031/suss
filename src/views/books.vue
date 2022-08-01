<template>
<div class="row">
<div class="col" >
    <h1 class="display-4 py-3">Books</h1>


</div>
</div>

<div class="row">
<div class="col col-6 col-lg-3 mb-3 books"  v-for="(book, index) in books"
:key="index">
<div class="card text-center">
<router-link v-bind:to="'/book/' + book.id" class="text-decoration-none">


<img class="img-fluid" v-bind:src="book.image" v-bind:alt="book.title">
<div class="card-body p-3">

</div>

</router-link>
</div>


</div>

</div>
</template>



<script>
export default {
    name: 'books' , 
    data: function () {
      return { 
         books:[]
      }
    }, 

    created: function () {
        fetch('https://seussology-api.herokuapp.com/api/books')
  .then(response => response.json())
  .then(json => {this.books =  json })

    }
}

</script>




<style></style>