<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">
          {{ profile.email }}
        </p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ profile.favoritedRestaurantsLength }}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{ profile.follwingsLength }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ profile.followersLength }}</strong> followers (追隨者)
          </li>
        </ul>
        <p>
          <a v-if="profile.id === currentUser.id" href="/users/1/edit">
            <button type="submit" class="btn btn-primary">Edit</button>
          </a>
          <span v-else>
            <button v-if="profile.isFollowed" type="submit" class="btn btn-primary" @click.stop.prevent="deleteFollow">取消追蹤</button>
            <button v-else type="submit" class="btn btn-primary" @click.stop.prevent="addFollow">追蹤</button>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile
    }
  },
  methods: {
    addFollow() {
      this.profile = {
        ...this.profile,
        isFollowed: true
      }
    },
    deleteFollow() {
      this.profile = {
        ...this.profile,
        isFollowed: false
      }
    }
  }
}
</script>
