<template>
  <q-page>
    <!-- Twitter Input Field -->
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
        class="new-tweet"
        bottom-slots
        v-model="newTweet"
        label="What's happening?"
        counter
        maxlength="280"
        :dense="dense"
        autogrow
      >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://echen.io/images/bdance.jpeg">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn 
          @click="addNewTweet" 
          class="q-mb-lg"
          rounded
          color="primary"
          label="Tweet"
          no-caps
          :disable="!newTweet"
        />
      </div>
      
    </div>

    <q-separator
      class="divider"
      size="8px"
      color="grey-2"
    />

    <!-- Feed -->
    <q-list separator>

      <transition-group
        appear 
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <q-item
          class="q-py-md"
          v-for="tweet in tweets"
          :key="tweet.created_at"
        >
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img src="https://echen.io/images/bdance.jpeg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong>Eric Chen</strong>
              <span class="text-grey-8 q-pl-sm">
                @{{ tweet.user.username }}
                &bull; 
                {{ relativeDate(tweet.created_at) }}
              </span>
              
            </q-item-label>

            <q-item-label class="text-body1 tweet-content">{{ tweet.text }}
            </q-item-label>
            <div class="row justify-between q-mt-sm tweet-icons">
              <q-btn
                icon="far fa-comment"
                color="grey"
                size="sm"
                flat 
                round
              />
              <q-btn
                icon="fas fa-retweet"
                color="grey"
                size="sm"
                flat 
                round
              />
              <q-btn
                icon="far fa-heart"
                color="grey"
                size="sm"
                flat 
                round
              />
              <!-- become share -->
              <q-btn
                @click="deleteTweet(tweet)"
                icon="fa fa-trash" 
                color="grey"
                size="sm"
                flat 
                round
              />
            </div>
          
          </q-item-section>
        </q-item>
      </transition-group>

      
    </q-list>


      
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { formatDistance } from 'date-fns'
import axios from 'axios'

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      newTweet: '',
      tweets: []
    }
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        id: 3, 
        text: this.newTweet, 
        created_at: Date.now(),
        user: {
          username: "below_ocean"
        }
      }

      this.tweets.unshift(newTweet)

      axios.post('http://localhost:5000/api/tweets/create', {
        text: this.newTweet, 
        uid: 1
      })

      this.newTweet = ''

    },
    deleteTweet(tweet) {
      let deleteid = tweet.id;
      let index = this.tweets.findIndex(tweet => tweet.id === deleteid);
      this.tweets.splice(index, 1);

      axios.delete('http://localhost:5000/api/tweets/delete', { data:
        {id: deleteid}
      })
      
    }
  },
  computed: {
    relativeDate(value) {
      return (value) => {
        return formatDistance(value, new Date());
      }
    }
  },
  mounted() {
    axios.get('http://localhost:5000/api/tweets').then(response => {
      this.tweets = response.data
  })
  }
})
</script>

<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.tweet-content
  white-space: pre-line
.tweet-icons
  margin-left: -5px
</style>
