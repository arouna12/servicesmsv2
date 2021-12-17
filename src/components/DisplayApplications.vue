<template>
    <div>
        <Navigation/>
            <section class="section__container top__container">

          <ul>
           

          </ul>
        <table class="styled-table" >
    <thead>
        <tr>
            <th>First Name</th>
            <th>last Name</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Ville</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Message</th>
            <th>Position</th>
        </tr>
    </thead>
    <tbody  v-for=" p in posts" :key="p.id">
       
        <tr class="active-row" >
            <td>{{p.firstname}}</td>
            <td>{{p.lastname}}</td>
            <td>{{p.address}}</td>
            <td>{{p.postalcode}}</td>
            <td>{{p.ville}}</td>
            <td>{{p.telephone}}</td>
            <td>{{p.email}}</td>
            <td>{{p.message}}</td>
            <td>{{p.position}}</td>
        </tr>
        <!-- and so on... -->
    </tbody>
</table>
            </section>
        <Footer/>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
 import axios from "axios";
 import Vue from 'vue'
import VueTable from '@lossendae/vue-table'

// install globally...


    export default {
        components:{
        Navigation,
        VueTable,
        Footer
        },
        
        data(){
            return{
                posts:null,
                 columns: [
          {
            name: "FirstName"
          },{
            name: "LastName"
          },{
            name: "Address"
          },
          {
            name: "Postal Code"
          },
          {
            name: "Ville"
          },
          {
            name: "Telephone"
          },
           {
            name: "email"
          },
          {
            name: "Message"
          },
          {
            name: "Position"
          }
        ],
            }
        },
        mounted(){
            
            axios
      .get(
          'https://servicesmscontact.herokuapp.com/api/all',
         
       
          )
      .then(response =>
          
          this.posts = response.data
          
      )
        
       

      .catch(error => console.log(error))
      .finally(() => this.loading = false)

     
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #0092ff;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #0092ff;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #0092ff;
}
</style>