<template>
<div class="row">
<div class="col" >
    <h1 class="display-4 py-3 text-capitalize"> {{ book.id }}</h1>


</div>

<div class="row">
<div class="col">
    <img class="img-fluid" v-bind:src="book.image" v-bind:alt="book.title">
</div>
<div class="col">

<ul>
    <li v-for="(description, index) in book.description"
    :key="index"> {{ description.description.title}}
    </li>
</ul>

</div>
</div>
</div>

<div class="row">

<div class="col">

    <router-link to="/" class="text-decoration-none">&lt; Back</router-link>
</div>


</div>

</template>



<script>
export default {
    name: 'book', 
    props: ['title'],
    data: function (){
        return {
            book: {
                title: '',
                id: '',
                year_published: '',
                image: '',
                description: []
            }
        }
    },

    created: function(){
       fetch('https://seussology-api.herokuapp.com/api/books/1')
  .then(response => response.json())
  .then(json => {this.book =  json})

    }
}

</script>

 fetch('https://seussology-api.herokuapp/com/api/books/1' + this.title)
         .then (response => response.json)
          .then(json => {
            this.book.title = json.title,
            this.book.id =json.id,
            // this.book.image = json.sprites.other['official-artwork'].front_default,
            this.book.description = json.description
          })


<style></style>