<template>
  <div class="container">
    <main id="todolist">
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>
      <div style="margin: 20px 0px">
        <p style="margin-bottom: 20px">Partie 1 :</p>
        <div style="margin-bottom: 20px">
          <input class="input" type="text" v-model="newOneItem" />
        </div>
        <li v-if="newOneItem">{{ newOneItem }}</li>
      </div>

      <div style="margin: 20px 0px">
        <p style="margin-bottom: 20px">Partie 2 :</p>
        <div style="margin-bottom: 20px">
          <input
            class="input"
            type="text"
            name="newitem"
            id="newitem"
            v-model="newItem"
          />
          <button class="button" @click="addItem">Ajouter</button>
          <ul>
            <li v-for="(item, index) in items" :key="index">
              <div
                style="
                  display: flex;
                  width: 100%;
                  justify-content: space-between;
                "
              >
                <div @click="editItem(index)">
                  <div v-if="!editing[index]" style="cursor: pointer">
                    {{ item }}
                  </div>
                  <input
                    v-else
                    class="input"
                    type="text"
                    v-model="newItemValue"
                  />
                </div>
                <div>
                  <div class="actions">
                    <button
                      class="button"
                      type="button"
                      @click="updateItem(index)"
                    >
                      modifier
                    </button>
                    <button
                      class="button"
                      type="button"
                      @click="deleteItem(item)"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style="margin: 20px 0px">
        <p style="margin-bottom: 20px">Partie 3 :</p>
        <div
          style="
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
        >
          <button @click="toggleColor" class="button">
            {{ isRed ? "Green" : "Red" }}
          </button>
          <div
            :style="{
              backgroundColor: isRed ? 'red' : 'green',
              width: '50px',
              height: '20px',
            }"
          ></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    title: String,
  },
  data() {
    return {
      items: [],
      newItem: "",
      newOneItem: "",
      isRed: true,
      editing: [],
    };
  },
  created() {
    this.editing = this.initializeEditingState();
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = "";
    },
    toggleColor() {
      this.isRed = !this.isRed;
    },
    deleteItem(item) {
      let index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    initializeEditingState() {
      return new Array(this.items.length).fill(false);
    },
    editItem(index) {
      this.editing[index] = true;
    },
    updateItem(index) {
      if (this.newItemValue != undefined && this.newItemValue.length > 0) {
        this.items[index] = this.newItemValue;
        this.editing[index] = false;
        this.newItemValue = "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  background: #f7f1f1;
  font-size: 1.1rem;
  font-family: "Quicksand", sans-serif;
  height: 100%;
}
@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
#todolist {
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 600px;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
}
#todolist h1 {
  /*text-align:center;*/
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
#todolist h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

#todolist .emptylist {
  margin-top: 2.6rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-style: italic;
  opacity: 0.8;
}
#todolist ul {
  margin-top: 2.6rem;
  list-style: none;
  margin-bottom: 20px;
}
#todolist .todolist-move {
  transition: transform 1s;
}
#todolist li {
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
}

#todolist .actions {
  flex-shrink: 0;
  padding-left: 0.7em;
}
#todolist .label {
  position: relative;
  transition: opacity 0.2s linear;
}
#todolist .done .label {
  opacity: 0.6;
}
#todolist .done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  height: 1px;
  background: #fff;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
#todolist .btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fff;
}

/* FORM */
.form {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.label {
  min-width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
.input {
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
  height: 30px;
}
.button {
  padding: 0 1.3rem;
  border: none;
  background: #ff6666;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transition: background 0.2s ease-out;
  height: 30px;
}
.button:hover {
  background: #ff5e5e;
}
form input,
form button {
  font-family: "Quicksand", sans-serif;
  height: 3rem;
}

/* TOOGLE COMPONENT */
.togglebutton-wrapper {
  margin-top: 1em;
}
.togglebutton-wrapper label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.togglebutton-wrapper input {
  position: absolute;
  left: -9999px;
}
.togglebutton-wrapper .togglebutton-label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.togglebutton-wrapper .tooglebutton-box {
  position: relative;
  display: block;
  margin-left: 0.6em;
  width: 38px;
  height: 22px;
  background: white;
  /*border:1px solid black;*/
  border-radius: 999px;
  cursor: pointer;
}
.togglebutton-wrapper .tooglebutton-box:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 18px;
  height: 18px;
  /*border:1px solid #FF6666;*/
  border-radius: 50%;
  background: #ff6666;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
}
.togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
  left: calc(100% - 4px - 16px);
  opacity: 1;
}
</style>
