<template>
  <div class="feed">
    <!-- Post Starts -->
    <div class="post">
      <div class="post__body">
        <p>Your Feed</p>
        <div>
          <div v-for="(video, index) in videos" :key="index">
            <div>
              <div
                class="list-group-item"
                v-for="vid in video.data"
                :key="vid.id"
              >
                <div class="post__header">
                  <i class="material-icons sidebar__topAvatar">
                    <img :src="vid.user.profile_pic" class="img" />
                  </i>
                  <div class="post__info">
                    <h2>
                      {{ vid.user.firstname }} # Training Date :
                      {{ vid.training_date }}
                    </h2>
                    <h2></h2>
                  </div>
                </div>

                <video width="320" height="240" controls>
                  <source :src="vid.source_url" type="video/mp4" />
                </video>
                <div class="feed__inputOptions">
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> thumb_up </i>
                    <h4>Like</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> comment </i>
                    <h4>Comment</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> share </i>
                    <h4>Share</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> send </i>
                    <h4>Send</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IVideo, IServerResponse } from "../interfaces/video";
import VideoService from "../services/videoService";

export default defineComponent({
  name: "Video",
  data() {
    return {
      videos: [] as IVideo[],
      player: null,
      newVideo: [] as IVideo[],
    };
  },
  methods: {
    fetchVideos() {
      VideoService.getVideos()
        .then((res) => {
          this.videos = res.data.payload;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchVideos();
  },
});
</script>
<style scoped>
.feed {
  padding-top: 10px;
  padding-bottom: 10px;
  flex: 0.6;
  margin: 0 20px;
}

.feed__inputContainer {
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.feed__input {
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;
}

.feed__input > form {
  display: flex;
  width: 100%;
}

.feed__input > form > input {
  border: none;
  flex: 1;
  margin-left: 10px;
  outline-width: 0;
  font-weight: 600;
}

.feed__input > form > button {
  display: none;
}

.feed__inputOptions {
  display: flex;
  justify-content: space-evenly;
}

.inputOption {
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: gray;
  padding: 10px;
  cursor: pointer;
}

.inputOption:hover {
  background-color: whitesmoke;
  border-radius: 10px;
}

.inputOption > h4 {
  margin-left: 5px;
}

/* Post */
.post {
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.post__header {
  display: flex;
  margin-bottom: 10px;
}

.post__info {
  margin-left: 10px;
}

.post__info > p {
  font-size: 12px;
  color: gray;
}

.post__info > h2 {
  font-size: 15px;
}
.img {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
</style>
