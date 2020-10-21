<template>
  <div>
    <ol v-bind:key="menuitem.id" v-for="(menuitem, i) in menuitems">
      <h3>
        <li>{{ ++i }}. {{ menuitem.dishName }} - {{ menuitem.foodCategory }} - {{ menuitem.description }} - {{menuitem.status}}</li>
      <hr>
      </h3>
    </ol>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="lblDishName"
                      label="Dish Name"
                      label-for="dishName"
                      description="Enter New Dish Name">
          <b-form-input id="dishName"
                        type="text"
                        v-model="form.dishName"
                        required
                        placeholder="Enter Dish Name"> 
          </b-form-input>  
        </b-form-group>
        <b-form-group id="lblFoodCategory"
                      label="Food Category"
                      label-for="foodCategory"
                      description="Enter New Food Category">
          <b-form-input id="foodCategory"
                        type="text"
                        v-model="form.foodCategory"
                        required
                        placeholder="Enter Food Category"> 
          </b-form-input>  
        </b-form-group>
        <b-form-group id="lblDescription"
                      label="Description"
                      label-for="description"
                      description="Enter New Description">
          <b-form-input id="description"
                        type="text"
                        v-model="form.description"
                        required
                        placeholder="Enter Description"> 
          </b-form-input>  
        </b-form-group>
        <b-form-group id="lblStatus"
                      label="Status"
                      label-for="status"
                      description="Enter New Status">
          <b-form-input id="albumTitle"
                        type="text"
                        v-model="form.status"
                        required
                        placeholder="Enter Status"> 
          </b-form-input>  
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'menuitemlist',
  data () {
    return {
      form: {
        dishName: '',
        foodCateogry: '',
        description: '',
        status: ''
      },
      menuitems: {},
      show: true
    }
  },
  methods: {
    init () {
      axios
      .get('/api/menuitems', { crossdomain: true })
      .then(response => (this.albums = response.data))
      .then(() => console.log(this.albums))
      .catch(error => console.log(error))
    },
    postMenuitems () {
      axios
        .post('/api/menuitems',
        JSON.stringify(this.form),
        { crossdomain: true,
          withCredentials: true,
          responseType: 'json',
          mode: 'cors',
          headers:
          {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
          }
        })
        .then(response => console.log(response))
        .then(() => this.init())
        .then(() => this.clearForm())
        .catch(error => console.log(error))
    },
    clearForm () {
      /* Reset our form values */
      this.form.dishName = ''
      this.form.foodCateogry = ''
      this.form.description = ''
      this.form.status = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.postMenuitems()
    },
    onReset (evt) {
      evt.preventDefault()
      this.clearForm()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
