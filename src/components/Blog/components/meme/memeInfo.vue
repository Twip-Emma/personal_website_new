<template>
  <div class="image-viewer">
    <h3 class="image-title">{{ title }}</h3>
    <div class="image-container">
      <img :src="img" alt="图片" />
    </div>
    <div class="comment-section">
      <h4>评论</h4>
      <ul class="comment-list">
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/%E6%B3%89-%E8%BF%AD%E4%BB%A370.png",
    };
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    comments: {
      type: Array,
      default: () => [
        {
            "id":123,
            "text":666
        }
      ],
    },
  },
};
</script>

<style scoped>
.image-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid red;
}

.image-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.image-container {
  width: 75%;
  max-width: 1000px;
  margin-top: 20px;
}

.image-container img {
  max-width: 100%;
}

.comment-section {
  margin-top: 20px;
  width: 75%;
  max-width: 400px;
}

.comment-section h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.comment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comment-list li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
