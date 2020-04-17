<template>
<div id="public-nav" class="uk-background-secondary">
  <nav class="uk-navbar-container uk-margin " uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">Amazon Leasing</a>
    </div>
    <div class="uk-navbar-right">
     <ul class="uk-navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/calculator">Lease Calculator</router-link></li>
            <li><router-link to="/credit-application">Credit Application</router-link></li>
        </ul>
      </div>
  </div>
</template>
  <style>
    .uk-navbar-container {
      border-bottom:1px solid #999;
    }
  </style>