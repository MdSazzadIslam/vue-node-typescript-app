<template>
  <header>
    <!-- Header Starts -->
    <div class="header">
      <div class="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div class="header__search">
          <i class="material-icons"> search </i>
          <input type="text" />
        </div>
      </div>

      <div class="header__right">
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> home </i>
          <h3>Home</h3>
        </div>
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> supervisor_account </i>
          <h3>My Network</h3>
        </div>
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> business_center </i>
          <h3>Jobs</h3>
        </div>
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> chat </i>
          <h3>Messaging</h3>
        </div>
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> notifications </i>
          <h3>Notifications</h3>
        </div>
        <div class="headerOption">
          <i class="material-icons headerOption__icon"> account_circle </i>
          <h3>Me</h3>
        </div>
      </div>
    </div>
    <!-- Header Ends -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
 

<style>
.header__left img {
  object-fit: contain;
  height: 40px;
  margin-right: 10px;
}

.header {
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: white;
}

.header__left {
  display: flex;
}

.header__right {
  display: flex;
}

.header__search {
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;
}

.header__search > input {
  outline: none;
  border: none;
  background: none;
}

.headerOption {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
}

.headerOption:hover {
  color: black;
}

.headerOption h3 {
  font-size: 12px;
  margin-top: 10px;
  font-weight: 400;
}

.headerOption__icon {
  margin-right: 5px;
  height: 20px;
  width: 20px;
}
</style>
