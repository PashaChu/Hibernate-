<template>
    <section class="cards-wrapper">
        <div class="card-grid-space" v-for="post in posts" :key="post.userName">
          <a class="card" @click="openModal(post)" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
            <div>
                <h1>{{ post.postTitle }}</h1>
                <p>{{ post.postText }}</p>
                <div class="author">  {{ post.userName }}</div>
                <div class="tags">
                    <div class="tag" v-for="(tag, tagIndex) in post.postTags" :key="tagIndex">{{ tag }}</div>
                </div>
            </div>
          </a>
        </div>


        <div class="modal" v-if="isModalOpen">
          <div class="modal-content">
            <h1>{{ selectedPost.postTitle }}</h1>
            
            <p>{{ selectedPost.postText }}</p>
            <div class="author"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> {{ selectedPost.userName }}</div>
            <div class="tags">
              <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="tag" v-for="(tag, tagIndex) in selectedPost.postTags" :key="tagIndex"> {{ tag }}</div>
            </div>
            <div class="edit">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
                <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <button @click="openEditModal">Редактировать</button>
            </div>
            <button @click="closeModal">Закрыть</button>
          </div>
        </div>

      <div class="modal" v-if="isEditModalOpen">
        <div class="edit-modal">
          <input v-model="editedPost.postTitle" />
          <textarea v-model="editedPost.postText"></textarea>
          <button @click="closeEditModal">Назад</button>
          <button @click="saveChanges">Сохранить</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'load-table',
  components: {
    
    },
  data() {
    return {
      users: [],
      posts: [],
      isModalOpen: false,
      selectedPost: null,
      editedPost: null,
    }
  },
 computed: {
    },
 methods: {
      getPosts() {
        fetch('http://localhost:8080/users/table')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.users = data;
          this.posts = data.map(user => {
          const posts = user.posts.map(post => {
              return {
                  userName: user.login,
                  postTitle: post.title,
                  postText: post.text,
                  postTags: post.tags.map(tag => tag.name)
              };
          });
          return posts;
          }).flat();
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
      },
      openModal(post) {
        this.selectedPost = post;
        this.isModalOpen = true;
      },
      closeModal() {
        this.selectedPost = null;
        this.isModalOpen = false;
      },
      openEditModal() {
        this.isModalOpen = false;
        this.isEditModalOpen = true;
        this.editedPost = { ...this.selectedPost }; 
        
      },
      closeEditModal() {
        this.isEditModalOpen = false;
        this.isModalOpen = true;
      },
      saveChanges() {
        // fetch
        this.isEditModalOpen = false;
        this.isModalOpen = true;
      },
    },
 mounted(){
  this.getPosts();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');

:root {
  --color: #3c3163;
  --transition-time: 0.5s;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Open Sans';
  background: #fafafa;
}

a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
  padding-top: 10vh;
}

.card {
  font-family: 'Heebo';
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;
}

.card svg {
  position: absolute;
  top: 1vh;
  left: 1vh;
}

.card:hover {
  transform: rotate(0);
}

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card .tags {
  display: flex;
}

.card .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card .author {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}

.card:before, .card:after {
  content: '';
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all, var(--transition-time);
  transition-timing-function: ease-in-out;
}

.card:before {
  background: #ddd;
  width: 250%;
  height: 250%;
}

.card:after {
  background: white;
  width: 200%;
  height: 200%;
}

.card:hover {
  color: var(--color);
}

.card:hover:before, .card:hover:after {
  transform: scale(1);
}

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}


@media screen and (max-width: 1285px) {
  .cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }
  .info {
    justify-content: center;
  }
  .card-grid-space .num {
    margin-left: 0;
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .cards-wrapper {
    padding: 4rem 2rem;
  }
  .card {
    max-width: calc(100vw - 4rem);
  }
}

@media screen and (max-width: 450px) {
  .info {
    display: block;
    text-align: center;
  }
  .info h1 {
    margin: 0;
  }
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 70vw;
  text-align: left;
  position: relative;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-content h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.modal-content p {
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.modal-content .author {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.modal-content .tags {
  display: flex;
  flex-wrap: wrap;
}

.modal-content .tag {
  background-color: #007bff;
  color: #fff;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content .tag:hover {
  background-color: #0056b3;
}

.modal-content button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content button:hover {
  background-color: #0056b3;
}

.edit {
  display: flex;
  align-content: center;
  align-items: center;
  width: -webkit-fill-available;
}

.author {
  display: flex;
  align-items: center;
}


.edit-modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
border: 1px solid #ccc;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
z-index: 1000;
max-width: 400px;
width: 100%;
}

.edit-modal input,
.edit-modal textarea {
width: 100%;
margin-bottom: 15px;
padding: 10px;
box-sizing: border-box;
}

.edit-modal button {
background-color: #1C274C;
color: white;
padding: 10px 15px;
border: none;
cursor: pointer;
font-size: 14px;
}

.edit-modal button:hover {
background-color: #142042;
}

.edit-modal button + button {
margin-left: 10px;
}

</style>