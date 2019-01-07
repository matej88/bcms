<template>

<div>
  <h1> THIS IS THE SCHEDULE </h1>  
  <table class="table">
  <tr>
    <th>Thing Number</th>
    <th>Måndag</th>
    <th>Tisdag</th>
    <th>Onsdag</th>
    <th>Torsdag</th>
    <th>Fredag</th>
    <th>Lördag</th>
    <th>Söndag</th>
  </tr>
  <tr>
    <td>MMA Nybörjare</td>
    <td></td>
    <td class="mma-new">18:45 - 20:00</td>
    <td></td>
    <td class="mma-new">18:45 - 20:00</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MMA Fortsättare/Avancerade</td>
    <td></td>
    <td class="mma-adv">17:15 - 18:45</td>
    <td></td>
    <td class="mma-adv">17:15 - 18:45</td>
    <td></td>
    <td class="mma-adv">09:00 - 12:00</td>
    <td></td>
  </tr>
  <tr>
    <td>Brazilian Jiu Jitsu</td>
    <td></td>
    <td class="bjj">20:00 - 21:30</td>
    <td></td>
    <td class="bjj">20:00 - 21:30</td>
    <td></td>
    <td class="bjj">17:15 - 18:45</td>
    <td></td>
  </tr>
  <tr>
    <td>Brazilian Jiu Jitsu barngrupp</br>(7-15 år)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="bjj-kids">15:00 - 16:00</td>
  </tr>
  <tr>
    <td>Kickboxning</td>
    <td class="kb">18:00 - 19:15</td>
    <td></td>
    <td class="kb">18:00 - 19:15</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Taekwondo</td>
    <td class="tkw">21:15 - 22:15</td>
    <td></td>
    <td class="tkw">21:15 - 22:15</td>
    <td></td>
    <td class="tkw">18:15 - 19:15</td>
    <td></td>
    <td class="tkw">13:00 - 14:00</td>
  </tr>
  <tr>
    <td>Friträning</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>17:00 - 18:15</td>
    <td></td>
    <td></td>
  </tr> 

</table>
</div>
</template>

<script>
export default {
  name: 'Schedule',
}

</script>

<style scoped>
  h1 {
    color: black;
  }

  table.table { display: flex; flex-direction: column;}


.table tr th {
  width: 6.5em;
  text-align: center;
}
.table tr {
  height: 3em;
}
.table th:nth-child(1) {
  text-align: left;
  width: 15.5em;
}

.table td {
  width: 6.5em;
  height: 2.5em;
}
.table td:nth-child(1) {
  width: 15.5em;  
}

.table th {
  word-break: break-word;
}
.table th, .table td { 
  margin: 0.25em;
  padding: 0.25em;
}

.table td.mma-new {
  background: #ccc1;
}
.table td.mma-adv {
  background: #ccc2;
}

.table td.bjj {
  background: rgb(97, 209, 97);
}

.table td.bjj-kids {
  background: rgb(146, 240, 146);
}

@media screen and (max-width: 800px) {
  th { 
    margin: 0.5em 0;
    border: 1px solid rgba(3,3,3,0.2);
  }
  td, th {
    flex: 1 1 150px;
    border: 0.5px solid rgba(3,3,3,0.2);
  }

}
</style>
