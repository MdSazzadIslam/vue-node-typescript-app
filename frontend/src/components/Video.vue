<template>
  <div id="app">
    <div class="container is-fluid">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(video, index) in videos"
          :key="index"
        >
          <div>
            <li class="list-group-item" v-for="vid in video.data" :key="vid.id">
              <img :src="vid.user.profile_pic" class="img" />
              <video width="320" height="240" controls>
                <source :src="vid.source_url" type="video/mp4" />
              </video>
            </li>
          </div>
        </li>
      </ul>
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
img {
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
