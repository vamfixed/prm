<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs10 offset-xs-1>
        <v-toolbar flat color="white">
          <v-toolbar-title>List of Items</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6>
                      <v-text-field v-model="editedItem.itemdesc" label="Item Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field type="number" prefix="₱" v-model="editedItem.price" label="Price"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table :headers="headers" :items="items" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.itemdesc }}</td>
            <td class="text-xs-right">{{ props.item.price }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">
                edit
              </v-icon>
              <v-icon small @click="deleteItem(props.item)">
                delete
              </v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [{
          text: 'Item Name',
          align: 'left',
          value: 'itemdesc'
        },
        {
          text: 'Price',
          value: 'price',
          align: 'right'
        },
        { text: 'Actions', value: 'name', align: 'center', sortable: false }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        itemdesc: '',
        price: 0,
      },
      defaultItem: {
        itemdesc: '',
        price: 0,

      }
    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.items = [
            { itemdesc: 'item1', price: 100 }
        ];
      },

      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      }
    }
  }

</script>
