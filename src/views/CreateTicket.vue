<script>
export default {
  data: () => ({
    isHidden: false,
  }),
  methods: {
    async submitForm() {
      this.isHidden = true;
      //   const res = await fetch("", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },

      //     // pass in the information from our form
      //     body: JSON.stringify({
      //       username: this.username,
      //       email: this.email,
      //       password: this.password,
      //     }),
      //   });
    },
  },
};
</script>
<template>
  <div>
    <div class="bd-example">
      <form class="form" @submit.prevent="submitForm" method="POST">
        <div class="form-group">
          <span>Project Name</span>
          <input
            :value="text"
            @input="(event) => (text = event.target.value)"
            class="form-control"
            placeholder="project name"
          />
        </div>
        <div class="form-group">
          <span>type</span>
          <select class="form-control" v-model="selected">
            <option selected value=" ">Please select one</option>
            <option>badia</option>
            <option>badia</option>
            <option>badia</option>
            <option>badia</option>
            <option>other</option>
          </select>
        </div>
        <div v-if="selected === 'other'" class="form-group">
          <input
            :value="text"
            @input="(event) => (text = event.target.value)"
            class="form-control"
            placeholder="other"
          />
        </div>
        <div class="form-group">
          <span>details</span>
          <textarea
            v-model="message"
            placeholder="details"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" @click="greet">
            <slot>
              Submit
              <!-- fallback content -->
            </slot>
          </button>
        </div>
      </form>
      <div class="alert-container" v-if="isHidden">
        <div class="alert-box success">
          <div class="alert-content">
            <div class="alert-icon">
              <img
                src="https://s2.svgbox.net/hero-outline.svg?ic=check"
                width="32"
                height="32"
              />
            </div>
            <div class="text">
              <h3>Success create ticket</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --alertPosition: "top";
  --boxShadow: 10px 10px 12px rgba(0, 0, 0, 0.2);
}
.alert-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.alert-container .alert-box {
  position: relative;
  width: 400px;
  height: 100px;
  cursor: pointer;
  background: #fff;
  box-shadow: var(--boxShadow);
  transition: 0.3s ease-in-out;
  padding: 0 1rem;
    border: solid #f8f9fa;
}
.alert-container .alert-box .alert-content {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}
.alert-container .alert-box .alert-icon {
  position: relative;
  display: flex;
  min-width: 100px;
  align-items: center;
  justify-content: center;
}
.alert-container .alert-box::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 100%;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
}
.alert-container .alert-box:hover::before {
  width: 100%;
}
.alert-container .alert-box:hover .alert-content {
  color: #fff !important;
}
.alert-container .alert-box:hover .alert-content .alert-icon {
  color: #fff !important;
}

.success::before {
  content: "";
  background: green !important;
}
.success::before .alert-icon {
  color: green !important;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.form-group {
  margin-bottom: 1rem;
}
.bd-example {
  width: 75%;
  margin: 2rem auto;
  padding: 1.5rem;
  border-width: 0.2rem;
  position: relative;
  border: solid #f8f9fa;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
textarea.form-control {
  height: auto;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}
</style>
