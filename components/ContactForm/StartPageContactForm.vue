<template>
<div class="start-page-contact-form">
  <form>

  	<div class="step step-one " v-if="step === 0">
  		<h1 class="step-header" id="one" >Vill du <br><span>börja träna</span><br> med oss?</h1>
  		<button @click.prevent="next()"> Ja, tack!</button>
  	</div>

  	<div class="step step-two" v-if="step === 1">
	    <h1 class="step-header" id="two">Vad är ditt <br><span>namn?</span></h1>
	    <p class="input-error-text" v-if="errors.name">Snälla ange ditt namn :/ </p>
	    <input id="name" name="name" v-model="registration.name" v-bind:class="{ 'input-error animated bounce': errors.name }" placeholder="Conor McGregor...">
	    <button @click.prevent="prev()">Tillbaka</button>
	    <button @click.prevent="toStepTwo()">Nästa</button>
	</div>

  <div  class="step step-three" v-if="step === 2">
    <h1 class="step-header">Vad är din <br><span>email</span> <br> adress {{registration.name}}?</h1>
    <p class="input-error-text" v-if="errors.email">Ange en giltigt mailadress </p>
    <input id="email" name="email" type="email" v-model="registration.email" v-bind:class="{ 'input-error animated bounce': errors.email }" placeholder="random@mail.se">
    <button @click.prevent="prev()">Tillbaka</button>
    <button @click.prevent="toStepThree()">Nästa</button>
  </div>

  <div class="step step-four" v-if="step === 3">
    <h1 class="step-header">Vad vill du <br> <span>träna?</span></h1>
        <ul class="step-four-boxes">
          <li v-for="(kampsport, index) in registration.kampsporter">
            <label class="checkbox-container" :for="'cb-kampsport-'+index" >{{kampsport}}
            	<input type="checkbox" 
            	:value="kampsport"
            	:id="'cb-kampsport-'+index"
            	 v-model="registration.selection.kampsporter">
            	 <span class="checkmark"></span>
            </label>
            <!--<input type="checkbox" 
                   :value="kampsport" 
                   :id="'cb-kampsport-'+index" 
                   v-model="registration.selection.kampsporter">
            <label :for="'cb-kampsport-'+index">{{kampsport}}</label> -->
          </li>
        </ul>
    <button @click.prevent="prev()">Tillbaka</button>
    <button @click.prevent="submit()">Skicka</button>
    
  </div>
  </form>

</div>

</template>

<script>
export default {
	name: 'StartPageContactForm',
	data() {
		return {
		  step:0,
		  registration:{
		    name:null,
		    email:null,
		    kampsporter: ["MMA", "BJJ", "Kickboxning", "Taekwondo", "Barn Bjj"],
		    selection: {
		        member: "0",
		        framework: "vue",
		        kampsporter: []
		  	}
		  },
		  errors: { name: false, email: false}
		}
	},
	methods:{
		isValidEmail(email) {
			var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
			return emailRegExp.test(email);
		},
		toStepTwo() {
			if (!this.registration.name) {
				this.errors.name = true
				return;
			}
			this.errors.name = false
			this.next()
		},
		toStepThree() {
			if (!this.isValidEmail(this.registration.email)) {
				this.errors.email = true
				return;
			}
			this.errors.email = false;
			this.next()
		},
		prev() {
			if(this.step === 1) {
				this.errors.email = false
				this.errors.name = false
			}
			if(this.step === 2) {
				this.errors.email = false;
			}
		  this.step--;
		},
		next() {
		  this.step++;
		},

		submit() {
		  alert('submit ' + this.registration.selection.kampsporter.toString());      
		}
	}
}
</script>


<style scoped>
.step-four-boxes {
	padding-left: 42px;
	margin-bottom: 0;
}
.step-four-boxes li {
	text-align: left;
	list-style: none;
	color: rgba(33,33,33,0.9);
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 3px solid rgba(232,34,0,0.8);
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color:  rgba(232,34,0,0.5);
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background: rgba(232,34,0,0.8);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkbox-container:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.error {
	color: #212121;
}

.input-error {
	border: 3px solid rgba(232,34,0,0.8);
}

.input-error-text {
	text-align: left;
	margin: 0px;
	padding: 10px 15px;
	background: rgba(232,34,0,0.8);
	color: white;
	font-family: 'Roboto', sans-serif;
	font-size: 1.2rem;
}
.start-page-contact-form {
	font-family: 'Staatliches', cursive;
	z-index: 100;
	align-self: center;
	display: flex;
	justify-content: space-between;
	text-align: right;
	margin-top: 150px;
	padding-left: 200px;
}

.step-header {
	text-align: left;
	margin: 0;
	padding: 0;
	font-size: 5.7rem;
	color: rgba(33,33,33,0.9);
	flex: 1;
	line-height: 5.7rem;
	letter-spacing: 3px;
}

.step-header span {
	text-transform: uppercase;
	font-size: 7.2rem;
	line-height: 6.8rem;
	color: rgba(232,34,0,0.8);
	font-weight: 800;
	margin: 0;
}



.step-header#one span {
	margin-top: 10px;
	display: inline-block;
}

.step-header#two span {
	margin-top: 0px;
}

.step-four .step-header{
	padding: 0 30px;
}
button {
	font-family: 'Roboto', sans-serif;
	margin-top: 30px;
	background: none;
	padding: 1rem 2rem;
	font-size: 1.2rem;
	color: rgba(33,33,33,0.9);
	font-weight: 800;
	border: 3px solid rgba(33,33,33,0.8);
	cursor: pointer;
	outline:none;
	letter-spacing: 0px;
	box-shadow: 0 2px 3px rgba(0,0,0,0.0.9), 0 2px 3px rgba(0,0,0,0.2);
	transition: color 0.3s cubic-bezier(.25,.8,.25,1);
  	transition: background 0.3s cubic-bezier(.25,.8,.25,1);
}

button:hover {
	background: rgba(232,34,0,0.9);
	border: 3px solid rgba(232,34,0,0.9);
	color: white;
	box-shadow: 0 3px 4px rgba(0,0,0,0.15), 0 2px 3px rgba(0,0,0,0.2);
}

input {
	background: none;
	padding: 1rem 2rem 1rem 1rem;
	width: 90%;
	margin-top: 15px;
	font-size: 1.2rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 900;
	border: 2.5px solid rgba(33,33,33,0.8);
	color: rgba(46, 49, 49,0.9);
	outline: none;
}


input::placeholder {
	color: rgba(33, 33, 33,0.5);
	font-style: italic;

}

@media (max-width: 1160px) {
	.start-page-contact-form {
		padding-left: 0px;
	}
}
</style>